<template>
  <div class="project">
    <nuxt-link :to="`/projects/${slug}`">
      <div
        v-if="img"
        class="listimg"
        :style="`background-image: url('${img}');`"
      ></div>
    </nuxt-link>
    <div class="info">
      <h2 class="title">
        <nuxt-link :to="`/projects/${slug}`">{{ title }}</nuxt-link>
      </h2>
      <time class="sub">
        January 2018
      </time>
      <summary>
        {{ description }}
        <nuxt-link :to="`/projects/${slug}`">read more</nuxt-link>
      </summary>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'img', 'description', ],
  components: {},
  data () {
    return {
      slug: this.title.toLowerCase().replace(/ /g, '-'),
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

  .project {
    padding-bottom: $grid-base * 10;
    display: flex;
    flex-direction: column;

    &:nth-child(2n) .info {
      align-self: flex-end;
    }

    .listimg {
      background-size: cover;
      background-position: center center;
      width: 100%;
      height: $grid-base * 90;
      margin-bottom: -1 * $grid-base * 20;
    }

    .info {
      border-top: 4px solid $active;
      margin: 0 $screen-edge;
      max-width: $text-column + ($grid-base * 30);
      padding: 
        $grid-base * 10
        $grid-base * 20
        $grid-base * 10
        $grid-base * 10;
      background: $panelcolor;
    }

    h2 {
      line-height: 1.5;
    }

    summary {
      padding-top: $grid-base * 2;
      max-width: $text-column;
    }

  }

</style>
