<template>
  <header>
    <h1>
      <nuxt-link to="/">jasper</nuxt-link>
    </h1>
    <nav>
      <nuxt-link to="/about">about</nuxt-link>
    </nav>
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
  
  $header-height: $grid-base * 15;

  header {
    width: 100%;
    height: $header-height;
    display: flex;
    align-items: center;
    padding: 0 $screen-edge;

    h1 {
      padding: 0;
      margin: 0;
      margin-right: $grid-base * 5;
    }
  }

</style>
