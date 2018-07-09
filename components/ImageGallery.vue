<template>
  <div class="gallery">
    <h4 v-if="title">
      {{ title }}
    </h4>
    <div class="tiles">
      <div
        v-for="img, key in images"
        :key="key"
        @click="lightbox(img)"
        class="imageholder"
      >
        <div 
          class="image"
          :style="{'background-image': `url('${ img }')`}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'images' ],
  components: {},
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {},
  mounted () {},
  methods: {
    lightbox (src) {
      this.$store.commit('set', { lightboxSrc: src })
    }
  },
}
</script>

<style lang="scss" scoped>

  .gallery {
    width: 100%;
    position: relative;
    margin: 0 auto $grid-base * 22 auto;

    @include width (mobile) {
      padding: 0 $screen-edge-mobile;
      margin-bottom: $grid-base * 10
    }

    .tiles {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: $grid-base * 3;

      @include width (mobile) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0;
      }
    }

    .imageholder {
      flex: 1;
      height: $grid-base * 30;
      border: 1px solid #eee;
      overflow: hidden;
      cursor: zoom-in;
      position: relative;

      @include width (mobile) {
        border: none;
      }

      .image {
        background-color: $off-bg;
        transform: scale(1);
        background-size: cover;
        background-position: top center;
        transition: .3s;
        width: 100%;
        height: 100%;

        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }

</style>
