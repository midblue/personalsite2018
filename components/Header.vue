<template>
  <header>
    <div class="header-content">
      <div class="flex">
        <h1>
          <nuxt-link exact to="/">Jasper</nuxt-link>
        </h1>
        <nav>
          
        </nav>
      </div>
      <div>
        <div>UX Engineer, Digital Tinkerer. <nuxt-link to="/about">About me</nuxt-link></div>
        <!-- <div class="fade">Thing maker/considerer</div>
        <nuxt-link to="/about">Projects</nuxt-link>
        |
        <nuxt-link to="/about">Experiences</nuxt-link>
        |
        <nuxt-link to="/about">Breakdowns</nuxt-link>
        | -->
        
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
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>
  
  $header-height: $grid-base * 50;
  $header-extra: $grid-base * 200;

  header {
    width: 100%;
    height: $header-height;
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    color: white !important;
    font-weight: 600;
  }

  .bg {
    // position: fixed;
    position: absolute;
    width: 200vw;
    height: 100vw;
    background: $active;
    background: linear-gradient($active, $active);
    transform: 
      translateX(-35%) 
      translateY(-95%) 
      rotate(-30deg);
    z-index: 0;
  }

  .header-content {
    position: relative;
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

</style>
