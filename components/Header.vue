<template>
  <header :class="page">
    <div class="wrapper">
      <div class="circle"></div>
      <div class="header-content">
        <div class="flex">
          <div>
            <h1>
              <nuxt-link exact to="/">Jasper Stephenson</nuxt-link>
            </h1>
            <div>
              UX Engineer, Digital Tinkerer
            </div>
          </div>
          <div class="tab-bar">
            <nuxt-link
              to="/" exact
              class="tab"
              :class="{active: pageCategory === 'projects'}"
            >Projects</nuxt-link>

            <nuxt-link
              to="/writing"
              class="tab"
              :class="{active: pageCategory === 'writing'}"
            >Writing</nuxt-link>

            <nuxt-link
              to="/about"
              class="tab"
              :class="{active: pageCategory === 'about'}"
            >About</nuxt-link>
          </div>
        </div>
      </div>
    </div>
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
    pageCategory () { return this.$store.state.pageCategory },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>
  
  $header-height: $grid-base * 40;
  $header-height-mobile: $grid-base * 40;

  header {
    width: 100%;
    height: $header-height;
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    font-weight: 600;
    position: relative;
    border-top: 8px solid $text;

    @include width (mobile) {
      height: $header-height-mobile;
    }
  }

  .wrapper {
    position: relative;
    display: block;
    @include full-width-with-pad();
  }


  $circle-diameter: $grid-base * 50;

  .circle {
    position: absolute;
    width: $circle-diameter;
    height: $circle-diameter;
    z-index: 100;
    background: linear-gradient(#57c5fb, #4c90f0);
    border-radius: 50%;
    transform: translate(-30%, 8%);
    mix-blend-mode: multiply;
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
    text-decoration: underline;
    color: $text;
  }

  .tab-bar {
    padding-bottom: $grid-base * 3;
  }

  $tab-height: $grid-base * 8;

  .tab {
    text-decoration: none;
    height: $tab-height;
    margin: 0 $grid-base;
    padding:
      $grid-base
      $grid-base * 3
      $grid-base * 1.5 
      $grid-base * 3;
    border-radius: $tab-height / 2;

    &.active {
      color: white;
      font-weight: 600;
      background: $text;
    }
  }

  h1 a, h1 a:visited, h1 a:hover, h1 a:active {
    text-decoration: none;
  }

  h1, h4 {
    padding: 0;
    margin-right: $grid-base * 5;
    margin-bottom: 0;
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
