<template>
  <section class="posts">
    <Post
      v-for="post in posts"
      :key="post.title"
      v-bind="post"
    />
  </section>
</template>

<script>
import Post from '~/components/PostFixedWidth'

export default {
  props: [ 'posts', ],
  components: { Post, },
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

<style lang="scss">

</style>
