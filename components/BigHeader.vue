<template>
  <header>
    <h1>
      jasper
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
  
  $header-height: $grid-base * 75;

  header {
    width: 100%;
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 $screen-edge;

    h1 {

    }
  }

</style>
