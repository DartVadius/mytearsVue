import { Auth } from '@/api/apiService'
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH
} from '../actionsType'
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from '../mutationsType'

const state = {
  errors: null,
  user: {},
  isAuthenticated: false
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN] ({ commit }, credentials) {
    return new Promise(resolve => {
      Auth.login(credentials)
        .then(({ data }) => {
          commit(SET_AUTH)
          localStorage.setItem('access_token', data['access_token'])
          localStorage.setItem('refresh_token', data['refresh_token'])
          resolve(data)
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [LOGOUT] ({ commit }) {
    commit(PURGE_AUTH)
  },
  [REGISTER] ({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      Auth.post('users', { user: credentials })
        .then(({ data }) => {
          commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          commit(SET_ERROR, response.data.errors)
          reject(response)
        })
    })
  },
  [CHECK_AUTH] ({ commit }) {
    // if (JwtService.getToken()) {
    //   ApiService.setHeader()
    //   ApiService.get('user')
    //     .then(({ data }) => {
    //       context.commit(SET_AUTH, data.user)
    //     })
    //     .catch(({ response }) => {
    //       context.commit(SET_ERROR, response.data.errors)
    //     })
    // } else {
    //   context.commit(PURGE_AUTH)
    // }
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = error
  },
  [SET_AUTH] (state) {
    state.isAuthenticated = true
    state.errors = {}
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
