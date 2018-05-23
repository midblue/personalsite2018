<template>
  <div
    class="post-image"
  >
    <img
      ref="image"
      :src="src"
      :alt="alt"
      @click="lightbox"
    />
    <div class="caption" v-if="alt || link">
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
    return {}
  },
  methods: {
    lightbox () {
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
    border: 1px solid $border;
  }

  .caption {
    margin: $grid-base auto 0 auto;
    max-width: $max-text-column-width;
    font-size: .75em;
    text-align: center;
    transition: opacity .2s;
    max-width: 500px;
  }


</style>
