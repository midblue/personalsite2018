<template>
  <div class="bottom-links">
    <nuxt-link
      v-if="prevPost"
      class="left"
      :to="`/posts/${prevPost.slug}`"
    >
      <span class="sub">Previous post:</span>
      {{ prevPost.title }}
    </nuxt-link>
    <nuxt-link to="/" class="center">Home</nuxt-link>
    <nuxt-link
      v-if="nextPost"
      :to="`/posts/${nextPost.slug}`"
    >
      <span class="sub">Next post:</span>
      {{ nextPost.title }}
    </nuxt-link>
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

  .bottom-links {
    display: flex;
    border-top: 1px solid $border-bg;
    line-height: 1.4;

    a, a:hover, a:visited, a:active {
      color: $panel;
    }

    .sub {
      font-size: .9em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
    }

    .left {
      align-items: flex-start;
      border-right: 2px solid $border;
      flex: 1;
    }

    .center {
      align-items: center;
      border-right: 2px solid $border;
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
      // border-top: 2px solid transparent;
      transition: all .2s;
      padding: $grid-base * 3 $grid-base * 5;
      background: $active-on-dark;
      font-weight: 600;

      &:hover {
        background: desaturate(darken($active, 5%), 15%);
        // border-top: 2px solid $active;
      }
    }
  }


</style>
