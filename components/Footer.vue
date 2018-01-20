<template>
  <footer>
    <div>Footer</div>
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
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">
  
  $footer-height: $grid-base * 20;

  footer {
    width: 100%;
    height: $footer-height;
    display: flex;
    align-items: center;
    padding: 0 $screen-edge;
  }
</style>
