<template>
  <div id="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
router-view {
  flex: 1;
}

body{
    background-color: #1C1C1C;
  }
</style>
