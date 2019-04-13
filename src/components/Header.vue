<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="'/'" class="navbar-brand">My Tears</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="form-inline ml-auto my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <router-link :to="'/login/'" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="logout">Logout</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import 'bootstrap'
import { LOGOUT, CHECK_AUTH } from '@/store/actionsType'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  created () {
    this.$store.dispatch(CHECK_AUTH).then(() => {})
  },
  computed: {
    ...mapGetters(['currentUser', 'isAuthenticated', 'userRole'])
  },
  watch: {
    userRole () {
      console.log('x', this.currentUser, this.isAuthenticated, this.userRole)
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: 'posts' })
      })
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/custom-bootstrap.scss';
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';
</style>
