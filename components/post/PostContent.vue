<template>
  <article class="post">
    <template v-for="(element, index) in content">
      <div class="divider centered-in-column" v-if="element.h2 || element.line"></div>
      <h2
        :key="index"
        v-if="element.h2"
        v-html="element.h2"
        class="centered-in-column"
      ></h2>
      <h3
        :key="index"
        v-if="element.h3"
        v-html="element.h3"
        class="centered-in-column"
      ></h3>
      <h4
        :key="index"
        v-if="element.h4"
        v-html="element.h4"
        class="centered-in-column"
      ></h4>
      <p
        :key="'p' + pindex + 'n' + index"
        v-if="element.p"
        v-for="(text, pindex) in element.p"
        v-html="text"
        class="centered-in-column"
      ></p>
      <div
        :key="'n' + index"
        v-if="element.aside"
        class="centered-in-column"
      >
        <p class="aside">
          <span
            v-if="element.aside.title"
            class="asidetitle"
            v-html="element.aside.title"
          ></span>
          <span
            class="p"
            v-for="(p, aindex) in element.aside.text"
            :key="'a' + aindex"
            v-html="p"
          ></span>
        </p>
      </div>
      <div
        :key="index"
        v-if="element.ul || element.ol"
        class="centered-in-column"
      >
        <ul
          :key="index"
          v-if="element.ul"
        >
          <li
            v-for="(item, lIndex) in element.ul"
            :key="lIndex"
            v-html="item"
          ></li>
        </ul>
        <ol
          :key="index"
          v-if="element.ol"
        >
          <li
            v-for="(item, lIndex) in element.ol"
            :key="lIndex"
            v-html="item"
          ></li>
        </ol>
      </div>
      <PostImage
        :key="'i' + imgIndex + 'n' + index"
        v-if="element.img"
        v-for="(image, imgIndex) in element.img"
        v-bind="image"
        @lightbox="lightbox"
      />
    </template>
    <img src="~/assets/tombstone-gray.svg" class="tombstone" />
  </article>
</template>

<script>
import PostImage from '~/components/post/PostImage'
export default {
  props: [ 'content', ],
  components: { PostImage, },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    lightbox (src) { this.$emit('lightbox', src) },
  },
}
</script>
<style lang="scss" scoped>

  .post {
    padding-bottom: $grid-base * 20;
  }

  .aside {
    opacity: .8;
    background: $bg;
    padding: $grid-base * 6 $grid-base * 8;
    margin: $grid-base * 4 auto;
    position: relative;
  }
  .asidetitle{
    display: block;
    margin-top: -$grid-base;
    margin-bottom: $grid-base;
    font-size: .75em;
    font-weight: 700;
    text-transform: uppercase;
    opacity: .5;
  }

  .divider {
    width: 10%;
    border-top: 2px solid $border-bg;
    margin-top: $grid-base * 12;
    padding-top: $grid-base * 8;
  }

  h3 {
    margin-top: $grid-base * 5;
  }

  .tombstone {
    display: block;
    width: $grid-base * 3;
    height: $grid-base * 3;
    margin: 0 auto;
    margin-top: $grid-base * 20;
  }
</style>
