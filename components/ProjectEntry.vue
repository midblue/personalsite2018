<template>
  <div class="project">
    <h3 class="title">
      {{ title }}
    </h3>
    <nuxt-link :to="`/projects/${slug}`">go</nuxt-link>
  </div>
</template>

<script>
export default {
  props: [ 'title', ],
  components: {},
  data () {
    return {
      slug: this.title.replace(' ', ''),
    }
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

<style lang="scss">

  

</style>
