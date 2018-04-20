<template>
  <header class="header-wrapper">
    <!--<div class="circle"></div>-->
    <div class="header-content">
      <div class="flex">
        <div>
          <h1>
            <nuxt-link exact to="/">Jasper Stephenson</nuxt-link>
          </h1>
          <div class="fade">
            UX Engineer, Digital Designer.
          </div>
          <!--<div>
            <a href="mailto:jasperstephenson@gmail.com" class="highlight">
              Open to new opportunities!
            </a>
          </div>-->
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
        <div class="social">
          <a href="https://medium.com/@jasper.stephenson" target="_blank"><img src="~/assets/icon-medium.svg" /></a>
          <a href="https://github.com/midblue" target="_blank"><img src="~/assets/icon-github.svg" /></a>
          <a href="https://www.linkedin.com/in/jasperstephenson/" target="_blank"><img src="~/assets/icon-linkedin.svg" /></a>
          <a href="mailto:jasperstephenson@gmail.com"><img src="~/assets/icon-email.svg" /></a>
          <a href="https://twitter.com/midblue" target="_blank"><img src="~/assets/icon-twitter.svg" /></a>
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
  
  $header-height: $grid-base * 80;

  $header-height-collapsed: $grid-base * 25;

  header {
    width: 100%;
    font-weight: 600;
    position: relative;
    transition: all .5s;
  }



  .header-wrapper {
    z-index: 5;
    position: sticky;
    @include full-width-with-pad();
    display: flex;
    align-items: center;
    height: $header-height;
    padding-top: $grid-base * 25;
    padding-bottom: $grid-base * 3;
    background: rgba(white, .95);
    position: sticky;
    top: $header-height-collapsed - $header-height;
  }

  .header-content {
    z-index: 5;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all .5s;
    position: sticky;
    top: $grid-base * 6;
  }

  a, a:visited, a:hover, a:active {
    text-decoration: none;
    color: $text;

    &.highlight {
      color: $active;
    }
  }

  .tab-bar{
    margin-top: $grid-base * 2;
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

  $icon-size: $grid-base * 4;

  .social {
    margin-top: $grid-base * 3;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    height: $icon-size;

    a {
      display: inline-flex;
      align-items: center;
      margin-left: $grid-base * 3;

      img {
        max-width: $icon-size;
        max-height: $icon-size;
      }
    }
  }

  h1 {
    line-height: 1.2;
    margin-top: 0;
    padding: 0;
    margin-right: $grid-base * 5;
    margin-bottom: 0;
  }

  .flex {
    width: 100%;
    display: flex;
  }

  .about {
    
    // .bg {
    //   transform: none;
    //   position: fixed;
    //   height: 100vh;
    // }
  }


</style>
