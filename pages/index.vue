<template>
  <div class="page-content" v-if="orderedPosts">
    <Lightbox />
    <PostList
      :posts="orderedPosts"
    />
    <ImageGallery
      title="Extras"
      :images="galleryImages"
    />
  </div>
</template>

<script>
import PostList from '~/components/PostList'
import ImageGallery from '~/components/ImageGallery'
import Lightbox from '~/components/post/Lightbox'
import Nav from '~/components/Nav'

export default {
  props: [],
  components: { PostList, Nav, ImageGallery, Lightbox, },
  data () {
    return {
    }
  },
  asyncData () {
    const posts = []
    const importedPosts = require.context('~/static/posts', true, /data\.js$/)
    importedPosts.keys().forEach(key => {
      if (importedPosts(key).category === 'projects')
        posts.push(importedPosts(key))
    })
    const postOrder = require('~/static/projectorder.js')
    const galleryImages = require('~/static/galleryimages.js')
    return {
      posts,
      postOrder,
      galleryImages,
    }
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: `UX engineer, friendly ghost.` },
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
      page: 'home',
      pageCategory: 'projects',
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

</style>
