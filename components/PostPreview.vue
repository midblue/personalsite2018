<template>
  <div class="post">
    <nuxt-link :to="`/posts/${slug}`">
      <div
        v-if="img"
        class="listimg"
        :style="`background-image: url('${img}');`"
      ></div>
    </nuxt-link>
    <div class="infobox">
      <div class="info padbot">
        <h2 class="title">
          <nuxt-link :to="`/posts/${slug}`">{{ title }}</nuxt-link>
        </h2>
        <summary>
          {{ clippedDescription }}
          <div>
            <nuxt-link
              :to="`/posts/${slug}`"
              class="keep-reading-link bubble-out-hover full-color"
            >
              <span>
                Keep reading →
              </span>
            </nuxt-link>
          </div>
        </summary>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'slug', 'date', 'img', 'description', 'category', ],
  components: {},
  data () {
    return {
    }
  },
  computed: {
    softCharLimit () {
      return this.winWidth > 768 ? 400 : 200
    },
    winWidth () { return this.$store.state.winWidth },
    clippedDescription () {
      if (this.description.length < this.softCharLimit) return this.description
      const descriptionAfterLimit = this.description.substring(this.softCharLimit)
      let min = 0
      const nextSpace = [
        descriptionAfterLimit.indexOf(' '),
        descriptionAfterLimit.indexOf(','),
        descriptionAfterLimit.indexOf('.'),
        descriptionAfterLimit.indexOf('!'),
        descriptionAfterLimit.indexOf('?'),
        descriptionAfterLimit.indexOf(';'),
        descriptionAfterLimit.indexOf(':'),
        descriptionAfterLimit.indexOf('-'),
      ].reduce((min, e) => (e < min && e >= 0) ? e : min) + this.softCharLimit
      return this.description.substring(0, nextSpace) + '...'
    },
  },
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss" scoped>

  .post {
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto $grid-base * 22 auto;
    display: grid;
    grid-template-columns: 50% 1fr;
    // box-shadow: $big-shadow;
    position: relative;

    @include width (mobile){
      grid-template-columns: 1fr;
      margin-bottom: $grid-base * 10;
    }

    .listimg {
      background-color: $bg;
      background-size: cover;
      background-position: center center;
      flex-shrink: 0;
      height: 100%;

      @include width (mobile){
        height: $grid-base * 30;
      }
    }
    $infobox-pad-lr: $grid-base * 8;
    $infobox-pad-lr-mobile: $grid-base * 4;

    .infobox {
      flex: 1;
      background: $panel;

      .title {
        margin-bottom: $grid-base * 5;
        margin-top: 0;
        a {
          color: $text;
        }

        @include width (mobile) {
          margin-top: $grid-base * 3;
          margin-bottom: $grid-base * 2;
        }
      }

      .info {
        padding-left: $infobox-pad-lr;

        @include width (mobile) {
          padding-left: $infobox-pad-lr-mobile;
          padding-right: $infobox-pad-lr-mobile;
        }

        &.padbot {
          padding-bottom: $grid-base * 3;
        }
      }
    }

    summary {
      padding-top: $grid-base * 2;
      max-width: $text-column;
    }

  }

  // $keep-reading-height: $grid-base * 8;

  .keep-reading-link {
    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-top: $grid-base * 3;
    border-radius: $grid-base * 1;
    // height: $keep-reading-height;
    border: 1px solid $active;
    padding: $grid-base * 0.75 $grid-base * 2;
    transition: .2s;
    text-decoration: none;

    span {
      position: relative;
      z-index: 2;
    }

    &:hover {
      color: white;
      // box-shadow: $color-shadow;
    }
  }
</style>
