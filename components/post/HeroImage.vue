<template>
  <div>
    <img 
      :src="src"
      :alt="alt"
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
  methods: {},
}
</script>
<style lang="scss" scoped>

  img {
    width: 100%;
    height: $grid-base * 100;
    object-fit: cover;
  }


</style>
