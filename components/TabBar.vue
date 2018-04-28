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

  @include width (mobile) {
    margin-top: $grid-base * 5;
    margin-left: $grid-base * -1;
  }
}

$tab-height: $grid-base * 8;

.tab {
  position: relative;
  display: inline-block;
  text-decoration: none;
  height: $tab-height;
  margin: 0 $grid-base;
  padding:
    $grid-base * .7
    $grid-base * 4
    $grid-base * .8
    $grid-base * 4;
  border-radius: $tab-height / 2;
  transition: .1s;
  overflow: hidden;
  z-index: 2;

  &.active {
    color: white;

    &::before {
      background: $active;
    }
  }

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top:50%;
    left:50%;
    border-radius: 50%;
    width: 0;
    height: 0;
    transition: .2s;
    background: rgba($active, .1);
  }

  &:hover::before, &.active::before {
    top: -50%;
    left: 0;
    width: 100%;
    height: 200%;
  }

  span {
    position: relative;
    z-index: 3;
  }

  @include width (mobile) {
    margin-left: 0;
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
