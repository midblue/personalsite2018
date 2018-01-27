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
  components: { Header, Footer, },
  mounted () {
  },
}

</script>

<style lang="scss">

</style>
