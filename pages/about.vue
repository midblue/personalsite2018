<template>
  <section class="about page-content">
    <div class="about-column">
      <img src="" />
      <h1 class="page-title centered-in-column">
        it's me
      </h1>
      <div class="centered-in-column">
        <div>esports fanatic. i'm talkin' all the good stuff: Super Smash Bros. Melee, League of Legends, Starcraft (Brood War & 2), Overwatch, speedruns. </div>
        <br />
        <a href="mailto:jasperstephenson@gmail.com">email</a>
        <a href="https://twitter.com/midblue" target="_blank">twitter</a>
        <a href="https://www.linkedin.com/in/jasperstephenson" target="_blank">linkedIn</a>
        <a href="https://github.com/midblue" target="_blank">github</a>
      </div>
    </div>
  </section>
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
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: `UX Engineer, Digital Tinkerer.` },
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {},
}
</script>

<style lang="scss">

  .about {
    @include full-width-with-pad();
    position: relative;
    z-index: 2;
  }

  .about-column {
    width: 100%;
    background: $panel;
    padding-bottom: $grid-base * 20;
    margin-bottom: $grid-base * 10;
  }

</style>
