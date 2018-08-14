<template>
  <div id="app">
    <router-view/>
    <!-- <footer-nav-com></footer-nav-com> -->
  </div>
</template>
<script>
// import FooterNavCom from '@/components/footer/footer-bar'
export default {
    name: 'App',
    components: {
        // FooterNavCom
    },
    created () {
        // document.body.style.height = document.body.clientHeight || document.documentElement.clientHeight + 'px'
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
  height: 100%;
}
</style>