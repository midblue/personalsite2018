<template>
  <footer>
    <div class="footer-content">
     <div>
        All text &amp; work by Jasper Stephenson.
      </div>
      <div class="padbot">
        Static site built using <a href="https://nuxtjs.org/guide" target="_blank">Nuxt.js</a> and hosted with <a href="https://github.com/midblue/midblue.github.io" target="_blank">Github Pages</a>.
      </div>
      <div class="padbot">
        <nuxt-link v-if="this.page !== 'home'" exact to="/">
          Back to Home
        </nuxt-link>
      </div>
      <div>
        <a href="mailto:jasperstephenson@gmail.com">Get in touch!</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: [],
  components: {},
  data () {
    return {}
  },
  asyncData () {
    return {}
  },
  computed: {
    page () { return this.$store.state.page },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss" scoped>

 * {
    text-align: center;
 }

  $footer-height: $grid-base * 60;

  footer {
    width: 100%;
    color: $text-sub;
    // font-weight: 600;
    // letter-spacing: 0.6px;
    background: $darkbg;
    height: $footer-height;
    position: relative;

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include full-width-with-pad();
      height: 100%;
    }

    a, a:hover, a:active {
      color: $active-on-dark;
    }
  }
</style>
