<template>
  <div id="app">
    <router-view/>
    <footer-nav-com></footer-nav-com>
  </div>
</template>
<script>
import FooterNavCom from '@/components/footer/footer-bar'
export default {
    name: 'App',
    components: {
        FooterNavCom
    }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>