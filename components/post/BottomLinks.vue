<template>
  <div class="bottom-links">
    <nuxt-link
      v-if="nextPost"
      class="right"
      :to="`/posts/${nextPost.slug}`"
      :style="{'background-image': `url('${nextPost.img}')`}"
    >
      <span class="sub fade ">Next post:</span>
      <span>{{ nextPost.title }}</span>
    </nuxt-link>
    <nuxt-link
      v-if="prevPost"
      class="left"
      :to="`/posts/${prevPost.slug}`"
      :style="{'background-image': `url('${prevPost.img}')`}"
    >
      <span class="sub fade">Previous post:</span>
      <span>{{ prevPost.title }}</span>
    </nuxt-link>
    <!--<nuxt-link exact to="/" class="center">
      <span>Home</span>
    </nuxt-link>-->
  </div>
</template>

<script>
export default {
  props: [ 'thisIndex', 'postOrder', ],
  components: {},
  data () {
    return {}
  },
  computed: {
    prevPost () {
      const slug = this.postOrder[this.thisIndex - 1] || null
      if (!slug) return null
      const postData = require(`~/static/posts/${slug}/data.js`).default
      return {
        slug,
        ...postData
      }
    },
    nextPost () {
      const slug = this.postOrder[this.thisIndex + 1] || null
      if (!slug) return null
      const postData = require(`~/static/posts/${slug}/data.js`).default
      return {
        slug,
        ...postData
      }
    },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>


  .bottom-links {
    display: flex;
    flex-direction: column;
    // border-top: 1px solid $border-bg;
    line-height: 1.4;

    a, a:hover, a:visited, a:active {
      position: relative;
      background-size: cover;
      background-position: center center;
      color: $panel;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2;
        background-color: rgba($darkbg, .6);
        transition: all .2s;
      }

      &:hover::after {
        background-color: rgba($darkbg, .3);
      }

      span {
        position: relative;
        z-index: 3;
        text-shadow: 0 0 3px rgba($darkbg, .2);
      }
    }

    .sub {
      font-size: .9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
    }

    .left {
      align-items: flex-start;
      // border-right: 2px solid $border;
      // flex: 1;
    }

    .center {
      align-items: center;
      // border-right: 2px solid $border;
      flex: .3;
    }

    .right {
      align-items: flex-end;
      text-align: right;
      // flex: 1;
    }

    & > * {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // border-top: 2px solid transparent;
      padding: $grid-base * 10;
      background: $active;
      font-weight: 600;
    }
  }


</style>
