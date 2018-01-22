<template>
  <div class="page-content">
    <h1 class="title">
      {{ title }}
    </h1>
    <article>
      content
      <PostImage />
    </article>
    <nuxt-link to="/">prev</nuxt-link>
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/">next</nuxt-link>
  </div>
</template>

<script>
import PostImage from '~/components/post/PostImage'
export default {
  props: [],
  components: { PostImage, },
  data () {
    return {}
  },
  asyncData (context) {
    const data = {
      title: context.route.path,
      slug: context.route.path.replace(/ /g, ''),
    } 
    return data
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss" scoped>

  .page-content {
    margin: 0 $screen-edge;
  }

</style>
