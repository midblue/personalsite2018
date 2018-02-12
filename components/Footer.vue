<template>
  <footer>
    <div class="footer-content">
      <div>
        All text &amp; work by Jasper Stephenson
      </div>
      <div>
        Site built using <a href="https://nuxtjs.org/guide" target="_blank">Nuxt</a>
      </div>
      <div>
        <a href="mailto:jasperstephenson.com">Get in touch</a>
      </div>
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

<style lang="scss" scoped>
  
  $footer-height: $grid-base * 60;

  footer {
    width: 100%;
    color: $text-sub;
    background: $darkbg;
    height: $footer-height;
    position: relative;

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      max-width: $max-page-width;
      margin: 0 auto;
    }

    a, a:hover, a:active {
      color: $active-on-dark;
    }
  }
</style>
