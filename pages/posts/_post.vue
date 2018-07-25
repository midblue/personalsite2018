<template>
  <div>
    <div class="page-content">
      <div class="post-column">
        <Nav
          v-if="parts"
          :sections="parts"
        />
        <HeroImage
          :src="img"
          :alt="'Header image – ' + title"
        />
        <div class="content-column">
          <h1 class="page-title centered-in-column">
            {{ title }}
          </h1>
          <PostContent
            :content="content"
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
export default {
  props: [],
  components: { HeroImage, Nav, PostContent, BottomLinks, },
  data () {
    return {
      parts: this.parts || null,
    }
  },
  asyncData ({ route }) {
    const path = route.path.replace(/\/$/, '')
    const data = require(`~/static${path}/data.js`)
    const content = require(`~/static${path}/content.js`)
    const postOrder = data.category === 'writing' ?
      require('~/static/writingorder.js') :
      require('~/static/projectorder.js')
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
    userLanguage () { return this.$store.state.userLanguage },
    thisIndex () { return this.postOrder.indexOf(this.slug) },
  },
  watch: {
    userLanguage (newLanguage) {
      if (newLanguage.toLowerCase().indexOf('ja') !== -1 && this.s === true)
        window.location.replace('http://www.jasperstephenson.com')
    }
  },
  mounted () {
    this.$store.commit('set', {
      page: this.slug,
      pageCategory: this.category,
    })
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

  .page-content {
    //margin-bottom: $grid-base * 15;
    @include full-width-with-pad();

    @include width (mobile) {
      padding: 0;
    }

    h1 {
      @include width (mobile) {
        font-size: 1.6em;
        margin-top: 0;
      }
    }

    .post-column {
      width: 100%;
      // background: $bg;
      // box-shadow: $big-shadow;
    }

    .content-column {
      @include width (mobile) {
        @include full-width-with-pad-mobile();
      }
    }

  }


</style>
