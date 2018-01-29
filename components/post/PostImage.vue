<template>
  <div
    class="post-image"
    :class="{pre: pre}"
    :style="`max-height: ${maxHeight + 100}px`"
  >
    <img
      ref="image"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
    />
    <div class="caption" :style="`max-width: ${width}px`">
      {{ alt }}
      <span>
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
      maxWidth: 0,
      maxHeight: 500,
      width: null,
      height: null,
      aspectRatio: 1,
      pre: true,
    }
  },
  computed: {
  },
  watch: {},
  mounted () {
    this.$nextTick(() => {
      this.maxWidth = parseInt(this.$el.getBoundingClientRect().width)
      const imageWidth = parseInt(this.$refs.image.getBoundingClientRect().width)
      const imageHeight = parseInt(this.$refs.image.getBoundingClientRect().height)
      // console.log(imageWidth, imageHeight)
      this.aspectRatio = imageWidth / imageHeight
      const containerAspectRatio = this.maxWidth / this.maxHeight
      // console.log(this.aspectRatio, containerAspectRatio)
      if (imageWidth <= this.maxWidth && imageHeight <= this.maxHeight) {
        this.width = imageWidth
        this.height = imageHeight
      }
      if (this.aspectRatio > containerAspectRatio) {
        this.width = this.maxWidth
        this.height = this.maxWidth / this.aspectRatio
      }
      else {
        this.height = this.maxHeight
        this.width = this.maxHeight * this.aspectRatio
      }
      this.$nextTick(() => this.pre = false)
    })
  },
  methods: {},
}
</script>
<style lang="scss" scoped>

  .post-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ($grid-base * 8) 0;
    transition: all .2s;
  }

  .pre {
    * {
      opacity: 0;
    }
  }

  img {
    transition: opacity .2s;
  }

  .caption {
    margin-top: $grid-base;
    font-size: .75em;
    text-align: center;
    transition: opacity .2s;
  }


</style>
