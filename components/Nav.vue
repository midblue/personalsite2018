<template>
  <div
    class="inner-nav"
    :class="{hover: hover}"
    @mouseout="hover = false"
  >
    <div class="overlay"></div>
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="element"
      :class="{highlight: hover === 'h' + index}"
      @mouseover="hover = 'h' + index"
    >
      <div class="line"></div>
      <nuxt-link
        :to="`/${section.slug}`"
        class="block"
      >
        <div class="dot"></div>
      </nuxt-link>
      <div class="title">
        <nuxt-link :to="`/posts/${section.slug}`">
          {{ section.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'sections', ],
  components: {},
  data () {
    return {
      hover: false,
    }
  },
  asyncData () {
    return {}
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>
<style lang="scss" scoped>

  $width: $grid-base * 6;

  .inner-nav {
    position: fixed;
    top: 0;
    right: 0;
    width: $width;
    z-index: 100;

    .overlay {
      z-index: 0;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background: rgba($darkbg, .4);
      opacity: 0;
      transition: all .5s;
    }

    .element {
      position: relative;
      width: $width;
      height: $width;
      z-index: 1;
      @include flex-center();

      &.highlight {
        background: $active;
        .line{
          background: $panel;
        }
        .dot{
          background: $panel;
        }
        .title a {
          color: $panel !important;
          background: $active;
          font-weight: 600;
        }
      }

      .line {
        position: absolute;
        top:0;
        bottom: 0;
        width: 2px;
        background: $text-sub;
        margin: 0 auto;
        z-index: 2;
      }

      &:nth-child(2) .line {
        top: 50%;
      }

      &:last-child .line {
        bottom: 50%;
      }

      .block {
        display: block;
        width: 100%;
        height: 100%;
        @include flex-center();
      }

      .dot {
        width: 20%;
        height: 20%;
        border-radius: 50%;
        background: $text-sub;
        z-index: 3;
      }

      .title {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transform: translateX(-80%);
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: transform .5s, opacity .5s;

        a {
          display: block;
          height: 100%;
          background: $panel;
          padding-left: $grid-base * 2;
          padding-right: 200px;
          margin-right: -200px;
          text-decoration: none;
          color: $text !important;
        }
      }
    }

    &.hover {
      .title {
        opacity: 1;
        transform: translateX(-100%);
        pointer-events: auto;
      }
      .overlay {
        opacity: 1;
      }
    }
  }

</style>
