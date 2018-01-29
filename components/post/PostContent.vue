<template>
  <article class="post">
    <template v-for="(element, index) in content">
      <div class="divider centered" v-if="element.h2 || element.line"></div>
      <h2
        :key="index"
        v-if="element.h2"
        v-html="element.h2"
        class="centered"
      ></h2>
      <h3
        :key="index"
        v-if="element.h3"
        v-html="element.h3"
        class="centered"
      ></h3>
      <h4
        :key="index"
        v-if="element.h4"
        v-html="element.h4"
        class="centered"
      ></h4>
      <p
        :key="'p' + pindex + 'n' + index"
        v-if="element.p"
        v-for="(text, pindex) in element.p"
        v-html="text"
        class="centered"
      ></p>
      <ul
        :key="index"
        v-if="element.ul"
        class="centered"
      >
        <li
          v-for="(item, lIndex) in element.ul"
          :key="lIndex"
        >
          {{ item }}
        </li>
      </ul>
      <PostImage
        :key="'i' + imgIndex + 'n' + index"
        v-if="element.img"
        v-for="(image, imgIndex) in element.img"
        v-bind="image"
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
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>

  .post {
    padding-bottom: $grid-base * 20;
  }

  .centered {
    max-width: $max-text-column-width;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .divider {
    width: 50%;
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
