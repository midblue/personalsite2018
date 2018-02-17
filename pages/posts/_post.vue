<template>
  <div>
    <Lightbox
      :src="lightboxSrc"
      @close="lightboxSrc = null"
    />
    <div class="page-content">
      <div class="post-column">
        <Nav
          v-if="parts"
          :sections="parts"
        />
        <HeroImage
          :src="img"
          :alt="'Header image – ' + title"
          @lightbox="lightbox"
        />
        <div class="content-column">
          <h1 class="title centered">
            {{ title }}
          </h1>
          <PostContent
            :content="content"
            @lightbox="lightbox"
          />
        </div>
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
import Lightbox from '~/components/post/Lightbox'
export default {
  props: [],
  components: { HeroImage, Nav, PostContent, BottomLinks, Lightbox, },
  data () {
    return {
      parts: this.parts || null,
      lightboxSrc: null,
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
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
      ]
    }
  },
  computed: {
    thisIndex () { return this.postOrder.indexOf(this.slug) },
  },
  watch: {},
  mounted () {},
  methods: {
    lightbox (src) {
      const fullSrc = (src.indexOf('full') === -1) ?
        src.substring(0, src.lastIndexOf('/')) + '/full' + src.substring(src.lastIndexOf('/'))
        : src
      this.lightboxSrc = fullSrc
    },
  },
}
</script>

<style lang="scss" scoped>

  .page-content {
    //margin-bottom: $grid-base * 15;
    @include full-width-with-pad();
    //box-shadow: $big-shadow;

    .post-column {
      width: 100%;
      background: $panel;
    }

    .centered {
      max-width: $max-text-column-width;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .title {
      margin-top: $grid-base * 4;
      //border-top: $grid-base solid $active;
      padding-top: $grid-base * 4;
      margin-bottom: $grid-base * 6;
    }
    
  }


</style>
