<template>
  <div class="page">
    <div class="topline"></div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import Header from '../components/Header'
export default {
  components: { Header, Footer, },
  computed: {
    winWidth () { return this.$store.state.winWidth },
  },
  mounted () {
    this.$store.commit('set', {
      userLanguage: window.navigator.userLanguage || window.navigator.language,
    })
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  },
  methods: {
    updateWidth () {
      const newWidth = window.innerWidth
      if (newWidth !== this.winWidth)
        this.$store.commit('set', { winWidth: newWidth })
    }
  }
}

</script>

<style lang="scss" scoped>

  .topline {
    position: fixed;
    z-index: 10;
    height: $grid-base;
    background: $text;
    width: 100%;
  }

</style>
