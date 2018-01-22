<template>
  <div
    class="inner-nav"
    :class="{hover: hover}"
    @mouseout="hover = false"
  >
    <div class="overlay"></div>
    <div
      v-for="section, index in sections"
      :key="index"
      class="element"
      :class="{highlight: hover === 'h' + index}"
      @mouseover="hover = 'h' + index"
    >
      <div class="line"></div>
      <nuxt-link
        :to="`/projects/${section.nickname}`"
        class="block"
      >
        <div class="dot"></div>
      </nuxt-link>
      <div class="title">
        <nuxt-link :to="`/projects/${section.nickname}`">
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
    background: $bg;
    z-index: 100;

    .overlay {
      z-index: 0;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      pointer-events: none;
      background: rgba($bg, .6);
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
        .line{
        }
        .dot{
          background: $active;
        }
        .title a {
          color: white !important;
          background: $active;
        }
      }

      .line {
        position: absolute;
        top:0;
        bottom: 0;
        width: 2px;
        background: $text-sub;
        margin: 0 auto;
      }

      &:first-child .line {
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
        z-index: 2;
      }

      .title {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transform: translateX(-80%);
        background: $bg;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: transform .5s, color .2s, opacity .5s;
        box-shadow: 0 0 50px $bg;

        a {
          display: block;
          height: 100%;
          padding-left: $grid-base * 2;
          transition: color .2s;
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
