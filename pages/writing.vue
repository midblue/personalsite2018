<template>
  <div class="page-content" v-if="orderedPosts">
    <PostList
      :posts="orderedPosts || posts"
    />
  </div>
</template>

<script>
import PostList from '~/components/PostList'
import Nav from '~/components/Nav'

export default {
  props: [],
  components: { PostList, Nav, },
  data () {
    return {
    }
  },
  asyncData () {
    const posts = []
    const importedPosts = require.context('~/static/posts', true, /data\.js$/)
    importedPosts.keys().forEach(key => {
      if (importedPosts(key).category === 'writing')
        posts.push(importedPosts(key))
    })
    const postOrder = require('~/static/postorder.js')
    return {
      posts,
      postOrder,
    }
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: `UX Engineer, Digital Tinkerer.` },
      ]
    }
  },
  computed: {
    userLanguage () { return this.$store.state.userLanguage },
    orderedPosts () {
      return this.postOrder.map(o => {
        const found = this.posts.find(p => p.slug === o)
        if (!found) return
        return (this.userLanguage.toLowerCase().indexOf('ja') !== -1 && found.s === true) ? null : found
      }).filter(p => p)
    }
  },
  watch: {},
  mounted () {
    this.$store.commit('set', {
      page: 'writing',
      pageCategory: 'writing',
    })
  },
  methods: {},
}
</script>

<style lang="scss">

</style>
