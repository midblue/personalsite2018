<template>
  <div class="tab-bar">

    <nuxt-link
      to="/" exact
      class="tab bubble-out-hover"
      id="projects"
      @click.native="clickHandler('projects')"
      :class="{active: pageCategory === 'projects' }"
    >
      <div>Projects</div>
    </nuxt-link>

		<nuxt-link
      to="/labs"
      class="tab bubble-out-hover"
      id="labs"
      @click.native="clickHandler('labs')"
      :class="{active: pageCategory === 'labs' }"
    >
      <div>Labs</div>
    </nuxt-link>

    <nuxt-link
      to="/writing"
      class="tab bubble-out-hover"
      id="writing"
      @click.native="clickHandler('writing')"
      :class="{active: pageCategory === 'writing' }"
    >
      <div>Writing</div>
    </nuxt-link>

    <nuxt-link
      to="/about"
      class="tab bubble-out-hover"
      id="about"
      @click.native="clickHandler('about')"
      :class="{active: pageCategory === 'about' }"
    >
      <div>About</div>
    </nuxt-link>

  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data () {
    return {}
  },
  asyncData () {
    return {}
  },
  computed: {
    page () { return this.$store.state.page },
    pageCategory () { return this.$store.state.pageCategory },
  },
  watch: {},
  mounted () {},
  methods: {
    clickHandler (category) {
      this.$store.commit('set', { pageCategory: category })
    },
  },
}
</script>
<style lang="scss" scoped>

a, a:visited, a:hover, a:active {
  text-decoration: none;
  color: $active;

  &.active {
    color: $bg;
  }
}

.tab-bar{
  margin-top: $grid-base * 1.5;
  position: relative;

  @include width (mobile) {
    margin-top: $grid-base * 5;
    margin-left: $grid-base * -1;
  }
}

$tab-height: $grid-base * 8;

.tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: $tab-height;
  margin: 0 $grid-base;
  line-height: 1;
  padding: 0 $grid-base * 4;
  border-radius: $tab-height / 2;
  transition: color .2s, box-shadow .35s;
  overflow: hidden;
  z-index: 2;
  
  &.active {
    color: white;
    // box-shadow: $color-shadow;
  }

  div {
    position: relative;
    z-index: 3;
  }

  @include width (mobile) {
    margin: 0;
    padding:
      $grid-base * .5
      $grid-base * 2
      $grid-base * .5
      $grid-base * 2;
  }
}

.highlight {
  position: absolute;
  z-index: 1;
  height: $tab-height;
  border-radius: $tab-height / 2;
  background: $active;
  transition: all .3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

</style>
