import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// запрос для авторизации http://127.0.0.1:8003/
// axios.defaults.baseURL = process.env.ROOT_API
// axios.defaults.baseURL = 'https://localhost:8080/'

let HTTP = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Accept': 'application/json'
  }
})

export const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    // todo вынести в .env
    Vue.axios.defaults.baseURL = 'https://localhost:8080/'
  },
  // setHeader () {
  //   Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'
  //   Vue.axios.defaults.headers.common['Cache-Control'] = 'no-cache'
  //   Vue.axios.defaults.headers.common['Accept'] = 'application/json'
  // },
  query (resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  post (resource, params) {
    return HTTP.post(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  put (resource, params) {
    return Vue.axios.put(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  },
  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`ApiService ${error}`)
    })
  }
}

export const Auth = {
  login (credentials) {
    // ApiService.setHeader()
    // todo вынести в .env
    credentials['grant_type'] = 'password'
    credentials['client_id'] = 2
    credentials['client_secret'] = 'feQ1gp8rZXZidiPIPTkL0wnl863Osy2R7nbGdE0N'
    console.log(credentials)
    return ApiService.post('/oauth/token/', credentials).then(response => {
      console.log(response)
      Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data['access_token']
      return response.data
    })
  },
  register (registrationData) {
    return ApiService.post('/register/', registrationData).then(response => {
      Vue.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data['access_token']
      return response.data
    })
  }
}
