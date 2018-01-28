<template>
  <div class="page-content">
    <Nav
      v-if="parts"
      :sections="parts"
    />
    <HeroImage
      :src="img"
    />
    <h1 class="title centered">
      {{ title }}
    </h1>
    <article
      v-html="HTMLData"
      class="centered"
    >
    </article>
    <div class="centered">
      <nuxt-link v-if="prevPost" :to="`/posts/${prevPost}`">prev</nuxt-link>
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link v-if="nextPost" :to="`/posts/${nextPost}`">next</nuxt-link>
    </div>
  </div>
</template>

<script>
import HeroImage from '~/components/post/HeroImage'
import Nav from '~/components/Nav'
export default {
  props: [],
  components: { HeroImage, Nav, },
  data () {
    return {
      parts: this.parts || null,
    }
  },
  asyncData (context) {
    const path = context.route.path.replace(/\/$/, '')
    const JSONData = require(`~/static${path}/data.json`)
    const HTMLData = require(`~/static${path}/content.html`)
    const postOrder = require('~/static/postorder.json')
    const data = {
      ...JSONData,
      HTMLData,
      postOrder,
    } 
    return data
  },
  computed: {
    thisIndex () { return this.postOrder.indexOf(this.slug) },
    prevPost () {
      return this.postOrder[this.thisIndex - 1] || null
    },
    nextPost () {
      return this.postOrder[this.thisIndex + 1] || null
    },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss" scoped>

  .page-content {
    max-width: $max-page-width;
    width: 100%;
    margin: 0 auto;
    margin-bottom: $grid-base * 25;
  }

  .title {
    border-top: 4px solid $active;
    padding-top: $grid-base * 3;
  }
  
  .centered {
    max-width: $max-text-column-width;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
