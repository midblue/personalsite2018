<template>
  <header>
    <div class="flex">
      <h1>
        <nuxt-link to="/">jasper</nuxt-link>
      </h1>
      <nav>
        
      </nav>
    </div>
    <div>
      <span class="fade">UX Engineer, Digital Tinkerer. </span>
      <nuxt-link to="/about">About me</nuxt-link>
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
  
  $header-height: $grid-base * 30;

  header {
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
    height: $header-height;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 a {
      text-decoration: none;
    }

    h1, h4 {
      padding: 0;
      margin: 0;
      margin-right: $grid-base * 5;
    }
  }

  .flex {
    display: flex;
    align-items: center;
  }

</style>
