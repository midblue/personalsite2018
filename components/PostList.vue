<template>
  <section class="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.title"
      v-bind="post"
    />
  </section>
</template>

<script>
import PostPreview from '~/components/PostPreview'

export default {
  props: [ 'posts', ],
  components: { PostPreview, },
  data () {
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
