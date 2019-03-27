<template>
  <div class="justify-content-center">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <form v-on:submit.prevent="login(mail, password)">
          <div class="form-group">
            <label for="inputEmail1">Email address</label>
            <input type="email" v-model="mail" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="inputPassword">Password</label>
            <input type="password" v-model="password" class="form-control" id="inputPassword" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actionsType'
export default {
  name: 'Login',
  data () {
    return {
      mail: null,
      password: null
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    login (mail, password) {
      this.$store
        .dispatch(LOGIN, { username: mail, password: password })
        .then((response) => {
          console.log(response)
          // this.$router.push({ name: 'home' })
        })
    }
  }
}
</script>

<style scoped>

</style>
