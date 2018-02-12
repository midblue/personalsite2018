<template>
  <header>
    <div class="header-content">
      <div class="flex">
        <h1>
          <nuxt-link exact to="/">jasper</nuxt-link>
        </h1>
        <nav>
          
        </nav>
      </div>
      <div>
        <div>UX Engineer, Digital Tinkerer</div>
        <!-- <div class="fade">Thing maker/considerer</div> -->
        <nuxt-link to="/about">Projects</nuxt-link>
        |
        <nuxt-link to="/about">Experiences</nuxt-link>
        |
        <nuxt-link to="/about">Breakdowns</nuxt-link>
        |
        <nuxt-link to="/about">About me</nuxt-link>
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
    //height: $header-height + $header-extra;
    //padding-bottom: $header-extra;
    //margin-bottom: -$header-extra;
    
    // background-image: url('~/static/images/blobs.svg');
    //background-image: url('~/static/images/slice.svg');
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
    //color: white !important;
    //font-weight: 500;

  }

  .header-content {
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
    height: $header-height;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

  }

  a, a:visited, a:hover, a:active {
    // color: white;
  }

  h1 a, h1 a:visited, h1 a:hover, h1 a:active {
    text-decoration: none;
    // color: black;
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
