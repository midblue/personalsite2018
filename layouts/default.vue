<template>
  <div class="page">
    <Header />
    <nuxt class="content"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Header from '../components/Header'
export default {
  components: { Header, Footer, }
}
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: $type-base;
  //word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
