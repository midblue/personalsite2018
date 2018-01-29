<template>
  <div>
    <div class="post-content">
      <Nav
        v-if="parts"
        :sections="parts"
      />
      <HeroImage
        :src="img"
      />
      <div class="content-column">
        <h1 class="title centered">
          {{ title }}
        </h1>
        <PostContent
          :content="content"
        />
      </div>
    </div>
    <BottomLinks
      :thisIndex="thisIndex"
      :postOrder="postOrder"
    />
  </div>
</template>

<script>
import HeroImage from '~/components/post/HeroImage'
import Nav from '~/components/Nav'
import PostContent from '~/components/post/PostContent'
import BottomLinks from '~/components/post/BottomLinks'
export default {
  props: [],
  components: { HeroImage, Nav, PostContent, BottomLinks, },
  data () {
    return {
      parts: this.parts || null,
    }
  },
  asyncData (context) {
    const path = context.route.path.replace(/\/$/, '')
    const JSONData = require(`~/static${path}/data.json`)
    const content = require(`~/static${path}/content.js`).default
    const postOrder = require('~/static/postorder.json')
    const data = {
      ...JSONData,
      content,
      postOrder,
    } 
    return data
  },
  computed: {
    thisIndex () { return this.postOrder.indexOf(this.slug) },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss" scoped>

  .post-content {
    max-width: $max-page-width;
    width: 100%;
    margin: 0 auto;
    margin-bottom: $grid-base * 10;
    background: $panel;
    box-shadow: $big-shadow;

    .centered {
      max-width: $max-text-column-width;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      border-top: $grid-base solid $active;
      padding-top: $grid-base * 4;
      margin-bottom: $grid-base * 6;
    }
    
  }


</style>
