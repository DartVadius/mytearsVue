<template>
  <footer id="footer-navs" class="footer text-center">
    <div class="container p-0">
      <span class="footer-copy">Copyright © 2018-{{year}}, My Tears.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      let dt = new Date()
      return dt.getFullYear()
    }
  }
}
</script>

<style scoped>

</style>
