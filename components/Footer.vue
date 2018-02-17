<template>
  <footer>
    <div class="footer-content">
      <div class="padbot">
        <a href="mailto:jasperstephenson.com">Get in touch!</a>
      </div>
     <div>
        All text &amp; work by Jasper Stephenson
      </div>
      <div>
        Static site built using <a href="https://nuxtjs.org/guide" target="_blank">Nuxt.js</a>
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
    // font-weight: 600;
    // letter-spacing: 0.6px;
    background: $darkbg;
    height: $footer-height;
    position: relative;

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @include full-width-with-pad();
      height: 100%;
    }

    a, a:hover, a:active {
      color: $active-on-dark;
    }
  }
</style>
