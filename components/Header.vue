<template>
  <header :class="page">
    <div class="wrapper">
      <div class="header-content">
        <div class="flex">
          <h1>
            <nuxt-link exact to="/">Jasper Stephenson</nuxt-link>
          </h1>
        </div>
        <div>
          <nuxt-link to="/about" v-if="page !== 'about'" key="1">About Me</nuxt-link>
          <nuxt-link exact to="/" v-else key="2">← Back to Home</nuxt-link>
          <!--
          <nuxt-link to="/about">Projects</nuxt-link>
          |
          <nuxt-link to="/about">Recaps</nuxt-link>
          |
          <nuxt-link to="/about">Breakdowns</nuxt-link>
          | -->
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </header>
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
  
  $header-height: $grid-base * 50;
  $header-height-mobile: $grid-base * 50;

  header {
    width: 100%;
    height: $header-height;
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    color: white !important;
    font-weight: 600;
    position: relative;
    -webkit-backface-visibility: hidden;

    @include width (mobile) {
      height: $header-height-mobile;
    }
  }

  .bg {
    // position: fixed;
    background: url('~/static/images/slice.svg');
    background-position: left 99%;
    background-size: cover;
    position: absolute;
    top:0;
    width: 100vw;
    height: 40vw;
    z-index: 0;
    -webkit-backface-visibility: hidden;

    @include width(mobile) {
      height: 150vw;
    }
  }

  .wrapper {
    position: relative;
    display: block;
    @include full-width-with-pad();
  }

  .header-content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    @include full-width-with-pad();
    height: $header-height;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  a, a:visited, a:hover, a:active {
    color: white;
    text-decoration: underline;
  }

  h1 a, h1 a:visited, h1 a:hover, h1 a:active {
    text-decoration: none;
    color: white;
  }

  h1, h4 {
    padding: 0;
    margin-right: $grid-base * 5;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .about {
    
    // .bg {
    //   transform: none;
    //   position: fixed;
    //   height: 100vh;
    // }
  }

</style>
