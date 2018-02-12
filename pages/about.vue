<template>
  <section class="about">
    <h1 class="title">
      i'm jasper
    </h1>
    <nuxt-link to="/">home</nuxt-link>
    <br />
    <a href="https://twitter.com/midblue" target="_blank">twitter</a>
    <a href="mailto:jasperstephenson@gmail.com">email</a>
    <a href="https://github.com/midblue" target="_blank">github</a>
  </section>
</template>

<script>

export default {
  props: [],
  components: {},
  data () {
    return {}
  },
  asyncData () {
    return {}
  },
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: `UX Engineer, Digital Tinkerer.` },
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">

  .about {
    padding: 0 $screen-edge;
  }

</style>
