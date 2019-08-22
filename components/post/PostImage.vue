<template>
  <div class="post-image">
    <img ref="image" :src="src" :alt="(alt||'').replace(/<[^>]+>/g, '')" @click="lightbox" />
    <div class="caption" v-if="alt || link">
      <span v-html="alt"></span>
      <span v-if="link">
        (
        <a :href="link" target="_blank">Source</a>)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'alt', 'source', 'link'],
  components: {},
  data() {
    return {}
  },
  methods: {
    lightbox() {
      this.$store.commit('set', { lightboxSrc: this.src })
    },
  },
}
</script>
<style lang="scss">
.post-image {
  position: relative;
  margin: ($grid-base * 8) 0;
  transition: all 0.2s;

  img {
    display: block;
    transition: opacity 0.2s;
    max-width: 100%;
    max-height: 500px;
    margin: 0 auto;
    border: 1px solid $border;
    cursor: zoom-in;
  }
}

.caption {
  margin: $grid-base auto 0 auto;
  max-width: $max-text-column-width;
  font-size: 0.75em;
  text-align: center;
  transition: opacity 0.2s;
  max-width: 500px;
}
</style>
