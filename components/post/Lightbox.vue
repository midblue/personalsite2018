<template>
  <div
    class="lightbox"
    :class="{on: lightboxSrc ? true : false}"
    @click="close"
  >
    <img
      ref="image"
      :src="lightboxSrc"
    />
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data () {
    return {}
  },
  computed: {
    lightboxSrc () { return this.$store.state.lightboxSrc },
  },
  watch: {},
  mounted () {},
  methods: {
    close () {
      this.$store.commit('set', { lightboxSrc: null })
    }
  },
}
</script>
<style lang="scss" scoped>

  .lightbox {
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background: rgba(black, .8);
    padding: 2%;
    transition: all .3s;
    opacity: 0;
    pointer-events: none;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: zoom-out;

    &.on {
      opacity: 1;
      pointer-events: auto;
    }
  }

  img {
    display: block;
    align-self: center;
    max-width: 100%;
    max-height: 100%;
  }


</style>
