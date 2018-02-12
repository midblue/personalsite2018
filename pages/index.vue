<template>
  <div class="page-content" v-if="orderedPosts">
    <PostList
      :posts="orderedPosts"
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
    return {
      userLanguage: '',
    }
  },
  asyncData () {
    const posts = []
    const importedPosts = require.context('~/static/posts', true, /data\.js$/)
    importedPosts.keys().forEach(key => posts.push(importedPosts(key).default))
    const postOrder = require('~/static/postorder.js').default
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
    orderedPosts () {
      const orderedPosts = this.postOrder.map(o => {
        const found = this.posts.find(p => p.slug === o)
        return (this.userLanguage === 'ja-JP' && found.s === true) ? null : found
      }).filter(p => p)
      // console.log(orderedPosts)
      return orderedPosts
    }
  },
  watch: {},
  mounted () {
    this.userLanguage = window.navigator.userLanguage || window.navigator.language
  },
  methods: {},
}
</script>

<style lang="scss">

</style>
