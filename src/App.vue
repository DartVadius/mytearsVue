<template>
  <div id="app" class="container">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  data () {
    return {
      showChangePassword: false,
      showCreateRequest: false,
      'alertsShow': false
    }
  },
  mounted () {},
  computed: {},
  components: {
    'Header': Header,
    'Footer': Footer
  },
  methods: {}
}
</script>
