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
      this.$store.commit('set', { lightboxSrc: this.src })
    }
  },
}
</script>
<style lang="scss" scoped>

  img {
    width: 100%;
    height: $grid-base * 100;
    background: $off-bg;
    object-fit: cover;

    @include width (mobile) {
      height: $grid-base * 60;
    }
  }


</style>
