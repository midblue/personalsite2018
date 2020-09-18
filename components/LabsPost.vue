<template>
  <div class="post">
    <div
      v-if="img"
      class="listimg"
      :style="`background-image: url('${img}');`"
    ></div>
    <div class="infobox">
      <div class="info padbot" :class="{nopadleft: !img}">
        <h2 class="title">{{ title }}</h2>
        <summary v-html="$md.render(content)">
        </summary>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'slug', 'date', 'img', 'content'],
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {
	},
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

  @include width(mobile) {
    grid-template-columns: 1fr;
    margin-bottom: $grid-base * 10;
  }

  .listimg {
    background: $off-bg;
    background-size: cover;
    background-position: center center;
    flex-shrink: 0;
    height: 100%;

    @include width(mobile) {
      height: $grid-base * 30;
    }
  }
  $infobox-pad-lr: $grid-base * 8;
  $infobox-pad-lr-mobile: $grid-base * 4;

  .infobox {
    flex: 1;
    background: $bg;

    .title {
      margin-bottom: $grid-base * 5;
      margin-top: 0;
      a {
        color: $text;
      }

      @include width(mobile) {
        margin-top: $grid-base * 3;
        margin-bottom: $grid-base * 2;
      }
    }

    .info {
      padding-left: $infobox-pad-lr;

      @include width(mobile) {
        padding-left: $infobox-pad-lr-mobile;
        padding-right: $infobox-pad-lr-mobile;
      }

      &.padbot {
        padding-bottom: $grid-base * 3;
      }

			&.nopadleft{
				padding-left: 0;
			}
    }
  }

  summary {
    padding-top: $grid-base * 2;
    max-width: $text-column;
  }
}
</style>
