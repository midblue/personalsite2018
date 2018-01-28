<template>
  <div class="page-content">
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
      <article
        v-html="HTMLData"
        class="centered"
      >
      </article>
      <div class="bottom-links">
        <nuxt-link
          v-if="prevPost"
          class="left"
          :to="`/posts/${prevPost.slug}`"
        >
          <span class="fade">Previous post:</span>
          {{ prevPost.title }}
        </nuxt-link>
        <nuxt-link to="/" class="center">Home</nuxt-link>
        <nuxt-link
          v-if="nextPost"
          :to="`/posts/${nextPost.slug}`"
        >
          <span class="fade">Next post:</span>
          {{ nextPost.title }}
        </nuxt-link>
      </div>
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
      const slug = this.postOrder[this.thisIndex - 1] || null
      if (!slug) return null
      return {
        slug,
        title: require(`~/static/posts/${slug}/data.json`).title,
      }
    },
    nextPost () {
      const slug = this.postOrder[this.thisIndex + 1] || null
      if (!slug) return null
      return {
        slug,
        title: require(`~/static/posts/${slug}/data.json`).title,
      }
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
    margin-bottom: $grid-base * 5;
  }
  
  .bottom-links {
    margin-top: $grid-base * 15;
    display: flex;
    box-shadow: $big-shadow;

    .left {
      align-items: flex-start;
      border-right: 1px solid $border;
      flex: 1;
    }

    .center {
      align-items: center;
      border-right: 1px solid $border;
      flex: .3;
    }

    & > *:not(.left):not(.center) {
      align-items: flex-end;
      text-align: right;
      flex: 1;
    }

    & > * {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-top: 2px solid transparent;
      border-bottom: 2px solid $panel;
      transition: all .2s;
      padding: $grid-base * 3 $grid-base * 5;
      background: $panel;

      &:hover {
        background: $offpanel;
        border-top: 2px solid $active;
      }
    }
  }

  .centered {
    max-width: $max-text-column-width;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

</style>
