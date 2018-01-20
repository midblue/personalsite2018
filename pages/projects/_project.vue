<template>
  <div class="page-content">
    <h1 class="title">
      {{ title }}
    </h1>
    <article>
      content
    </article>
    <nuxt-link to="/">home</nuxt-link>
  </div>
</template>

<script>

export default {
  props: [],
  components: {},
  data () {
    return {}
  },
  asyncData (context) {
    const data = {
      title: context.route.path,
      slug: context.route.path,
    } 
    return data
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">

</style>
