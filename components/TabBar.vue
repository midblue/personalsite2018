<template>
  <div class="tab-bar">

    <nuxt-link
      to="/" exact
      class="tab"
      id="projects"
      @click.native="clickHandler('projects')"
      :class="{active: pageCategory === 'projects' }"
    >
      <span>Projects</span>
    </nuxt-link>

    <nuxt-link
      to="/writing"
      class="tab"
      id="writing"
      @click.native="clickHandler('writing')"
      :class="{active: pageCategory === 'writing' }"
    >
      <span>Writing</span>
    </nuxt-link>

    <nuxt-link
      to="/about"
      class="tab"
      id="about"
      @click.native="clickHandler('about')"
      :class="{active: pageCategory === 'about' }"
    >
      <span>About</span>
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
  color: $text;

  &.active {
    color: $bg;
  }
}

.tab-bar{
  margin-top: $grid-base * 1;
  position: relative;
}

$tab-height: $grid-base * 8;

.tab {
  position: relative;
  display: inline-block;
  text-decoration: none;
  height: $tab-height;
  margin: 0 $grid-base;
  padding:
    $grid-base * .5
    $grid-base * 3
    $grid-base * 1
    $grid-base * 3;
  border-radius: $tab-height / 2;
  transition: .15s;
  overflow: hidden;
  z-index: 2;

  &.active {
    background: $active;
    color: white;
  }

  span {
    position: relative;
    z-index: 3;
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
