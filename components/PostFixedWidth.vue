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
      <div class="info" :class="{padbot: !parts}">
        <time class="fade">
          {{ date }}
        </time>
        <h2 class="title">
          <nuxt-link :to="`/posts/${slug}`">{{ title }}</nuxt-link>
        </h2>
        <summary>
          {{ clippedDescription }}
          <nuxt-link
            v-if="!parts"
            :to="`/posts/${slug}`"
            class="inline-block"
          >
            Keep reading →
          </nuxt-link>
        </summary>
      </div>
      <div
        class="parts"
        v-if="parts"
      >
        <nuxt-link
          v-for="(part, index) in parts"
          :key="index"
          :to="`/posts/${slug}#${part}`"
          index="index"
          class="part"
        >
          Part {{ index + 1 }}: {{ part }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'slug', 'date', 'img', 'description', 'parts', ],
  components: {},
  data () {
    return {
      softCharLimit: 700,
    }
  },
  computed: {
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
    margin: 0 auto $grid-base * 15 auto;
    display: grid;
    grid-template-columns: 45% 1fr;
    border-top: 4px solid $active;
    box-shadow: $big-shadow;

    .listimg {
      background-size: cover;
      background-position: center center;
      flex-shrink: 0;
      height: 100%;
    }

    $infobox-pad-lr: $grid-base * 10;

    .infobox {
      padding-top: $grid-base * 5;
      flex: 1;
      background: $panel;

      .info {
        padding: 0 $infobox-pad-lr;

        &.padbot {
          padding-bottom: $grid-base * 8;
        }
      }
      .parts {
        margin-top: $grid-base * 5;

        .part {
          display: block;
          width: 100%;
          //border-top: 1px solid $border;
          border-left: 0px solid transparent;
          padding: $grid-base * 2 $infobox-pad-lr;
          transition: all .2s;

          &:last-of-type {
            margin-bottom: $grid-base * 10;
            //border-bottom: 1px solid $border;
          }

          &:hover {
            background: $offpanel;
            border-left: $grid-base * 2 solid $active;
          }
        }
      }
    }

    summary {
      padding-top: $grid-base * 2;
      max-width: $text-column;
    }

  }

  .inline-block {
    display: inline-block;
  }
</style>
