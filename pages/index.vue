<template>
  <div class="page-content" v-if="orderedPosts">
    <PostList
      :posts="orderedPosts"
    />
    <Nav
      :sections="orderedPosts"
    />
  </div>
</template>

<script>
import PostList from '~/components/PostList'
import Nav from '~/components/Nav'

export default {
  layout: 'home',
  props: [],
  components: { PostList, Nav, },
  data () {
    return {}
  },
  asyncData () {
    const posts = []
    const importedPosts = require.context('~/static/posts', true, /^(.*\.json)/)
    importedPosts.keys().forEach(key => posts.push(importedPosts(key)))
    const postOrder = require('~/static/postorder.json')
    return {
      posts,
      postOrder,
    }
  },
  computed: {
    orderedPosts () {
      return this.postOrder.map(o => this.posts.find(p => p.slug === o))
    }
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">

</style>
