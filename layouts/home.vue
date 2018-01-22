<template>
  <div class="page">
    <BigHeader />
    <nuxt class="content"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import BigHeader from '../components/BigHeader'
export default {
  components: { BigHeader, Footer, },
  mounted () {
  },
}

</script>

<style lang="scss">

</style>
