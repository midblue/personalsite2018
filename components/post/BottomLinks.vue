<template>
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
    max-width: $max-page-width;
    width: 100%;
    margin: 0 auto;
    margin-bottom: $grid-base * 15;
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


</style>
