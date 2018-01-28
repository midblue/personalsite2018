<template>
  <footer>
    <div>
      All text &amp; work by Jasper Stephenson
    </div>
    <div>
      Site built using <a href="https://nuxtjs.org/guide" target="_blank">Nuxt</a>
    </div>
    <div>
      <a href="mailto:jasperstephenson.com">Get in touch</a>
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
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">
  
  $footer-height: $grid-base * 60;

  footer {
    width: 100%;
    color: $bg;
    background: $darkbg;
    height: $footer-height;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 $screen-edge;

    a, a:hover, a:active {
      color: $active-on-dark;
    }
  }
</style>
