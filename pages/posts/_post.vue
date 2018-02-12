<template>
    <div class="page-content">
      <Nav
        v-if="parts"
        :sections="parts"
      />
      <HeroImage
        :src="img"
        :alt="'Header image – ' + title"
      />
      <div class="content-column">
        <h1 class="title centered">
          {{ title }}
        </h1>
        <PostContent
          :content="content"
        />
        <BottomLinks
          :thisIndex="thisIndex"
          :postOrder="postOrder"
        />
      </div>
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
    const data = require(`~/static${path}/data.js`).default
    const content = require(`~/static${path}/content.js`).default
    const postOrder = require('~/static/postorder.js').default
    return {
      ...data,
      content,
      postOrder,
    }
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

  .page-content {
    max-width: $max-page-width;
    width: 100%;
    margin: 0 auto;
    margin-bottom: $grid-base * 15;
    //background: $panel;
    //box-shadow: $big-shadow;

    .centered {
      max-width: $max-text-column-width;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      margin-top: $grid-base * 4;
      border-top: $grid-base solid $active;
      padding-top: $grid-base * 4;
      margin-bottom: $grid-base * 6;
    }
    
  }


</style>
