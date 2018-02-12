<template>
  <div
    class="post-image"
    :style="`max-height: ${maxHeight + 100}px`"
  >
    <img
      ref="image"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      @click="lightbox(src)"
    />
    <div class="caption" v-if="alt" :style="`max-width: ${width}px`">
      {{ alt }}
      <span v-if="link">
        (<a :href="link" target="_blank">Source</a>)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'src', 'alt', 'source', 'link' ],
  components: {},
  data () {
    return {
      maxHeight: 500,
      width: null,
      height: null,
      naturalWidth: 800,
      naturalHeight: 500,
    }
  },
  computed: {
    maxWidth () { return parseInt(this.$el.getBoundingClientRect().width) },
    aspectRatio () { return this.naturalWidth / this.naturalHeight },
    containerAspectRatio () { return this.maxWidth / this.maxHeight }
  },
  watch: {
    naturalWidth () { this.$nextTick(() => this.calculateWidthAndHeight()) },
  },
  mounted () {},
  methods: {
    calculateWidthAndHeight () {
      if (this.naturalWidth <= this.maxWidth && this.naturalHeight <= this.maxHeight) {
        this.width = this.naturalWidth
        this.height = this.naturalHeight
      }
      if (this.aspectRatio > this.containerAspectRatio) {
        this.width = this.maxWidth
        this.height = this.maxWidth / this.aspectRatio
      }
      else {
        this.height = this.maxHeight
        this.width = this.maxHeight * this.aspectRatio
      }
    },
    lightbox (src) {
      this.$emit('lightbox', this.src)
    }
  },
}
</script>
<style lang="scss" scoped>

  .post-image {
    position: relative;
    margin: ($grid-base * 8) 0;
    transition: all .2s;
  }

  img {
    display: block;
    transition: opacity .2s;
    max-width: 100%;
    max-height: 500px;
    margin: 0 auto;
  }

  .caption {
    margin: $grid-base auto 0 auto;
    max-width: $max-text-column-width;
    font-size: .75em;
    text-align: center;
    transition: opacity .2s;
  }


</style>
