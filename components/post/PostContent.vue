<template>
  <article class="post">
    <template v-for="(element, index) in content">
      <img src="~/assets/threeticks.svg" class="img-divider" v-if="element.h2 || element.line" />

      <h2 :key="index" v-if="element.h2" v-html="element.h2" class="centered-in-column"></h2>
      <h3 :key="index" v-if="element.h3" v-html="element.h3" class="centered-in-column"></h3>
      <h4 :key="index" v-if="element.h4" v-html="element.h4" class="centered-in-column"></h4>

      <p
        :key="'p' + pindex + 'n' + index"
        v-if="element.p"
        v-for="(text, pindex) in element.p"
        v-html="text"
        class="centered-in-column"
      ></p>

      <div :key="'n' + index" v-if="element.aside" class="centered-in-column">
        <p class="aside">
          <span v-if="element.aside.title" class="asidetitle" v-html="element.aside.title"></span>
          <span class="p" v-for="(p, aindex) in element.aside.text" :key="'a' + aindex" v-html="p"></span>
        </p>
      </div>

      <div :key="index" v-if="element.ul || element.ol" class="centered-in-column">
        <ul v-if="element.ul">
          <li v-for="(item, lIndex) in element.ul" :key="lIndex" v-html="item"></li>
        </ul>
        <ol v-if="element.ol">
          <li v-for="(item, lIndex) in element.ol" :key="lIndex" v-html="item"></li>
        </ol>
      </div>

      <PostImage
        :key="'i' + imgIndex + 'n' + index"
        v-if="element.img"
        v-for="(image, imgIndex) in element.img"
        v-bind="image"
      />

      <div class="mp4-wrapper" v-if="element.mp4">
        <video v-if="element.mp4" :key="index" autoplay muted loop>
          <source :src="element.mp4.src" type="video/mp4" />
        </video>
        <div class="caption" v-if="element.mp4.alt || element.mp4.link">
          <span v-html="element.mp4.alt"></span>
          <span v-if="element.mp4.link">
            (
            <a :href="element.mp4.link" target="_blank">Source</a>)
          </span>
        </div>
      </div>

      <div :key="index" v-if="element.video" class="centered-in-column">
        <div class="video-wrapper" v-html="element.video"></div>
      </div>

      <div :key="index" v-if="element.grid" class="centered-in-column grid">
        <img v-for="(image, gindex) in element.grid" :key="gindex" :src="image" />
      </div>
    </template>
    <img src="~/assets/tombstone-gray.svg" class="tombstone" />
  </article>
</template>

<script>
import PostImage from '~/components/post/PostImage'
export default {
  props: ['content'],
  components: { PostImage },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.post {
  padding-bottom: $grid-base * 20;
}

.mp4-wrapper {
  position: relative;
  margin: ($grid-base * 8) auto;
  width: 100%;
  max-width: 100%;

  video {
    display: block;
    border: 1px solid $border;
    max-width: 100%;
    max-height: 500px;
    margin: 0 auto;
  }
}

.aside {
  opacity: 0.8;
  padding: 0 $grid-base * 8;
  border-left: 4px solid $text;
  margin: $grid-base * 10 auto;
  position: relative;

  @include width(mobile) {
    margin: $grid-base * 6 $grid-base * -4;
    padding: $grid-base * 4 $grid-base * 4 $grid-base $grid-base * 4;
  }
}
.asidetitle {
  display: block;
  margin-top: -$grid-base;
  margin-bottom: $grid-base;
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0.5;
}

.img-divider {
  width: 100%;
  height: $grid-base * 1.3;
  opacity: 0.2;
  margin: $grid-base * 11 auto $grid-base * 9 auto;
}

h3 {
  margin-top: $grid-base * 5;
}

.grid {
  margin: ($grid-base * 8) auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > * {
    max-width: 100%;
  }
}

.tombstone {
  display: block;
  width: $grid-base * 3;
  height: $grid-base * 3;
  margin: 0 auto;
  margin-top: $grid-base * 20;
}
</style>
