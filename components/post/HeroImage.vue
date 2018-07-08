<template>
  <div>
    <img 
      :src="src"
      :alt="alt"
      @click="lightbox"
    />
  </div>
</template>

<script>
export default {
  props: [ 'src', 'alt', ],
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
  methods: {
    lightbox () {
      this.$store.commit('set', { 
        lightboxSrc: (this.src.indexOf('full') === -1) ?
          this.src.substring(0, this.src.lastIndexOf('/')) + '/full' + this.src.substring(this.src.lastIndexOf('/')) :
          this.src
      })
    }
  },
}
</script>
<style lang="scss" scoped>

  img {
    width: 100%;
    height: $grid-base * 100;
    object-fit: cover;

    @include width (mobile) {
      height: $grid-base * 60;
    }
  }


</style>
