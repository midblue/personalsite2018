<template>
  <section class="about page-content">
    <div class="me-pic"></div>
    <div class="about-column">
    <img src=""/>
      <h1 class="page-title centered-in-column">
        it's me
      </h1>
      <div class="centered-in-column">
        yo LINK to your POSTS in here in the middle of your self intoduction because that shit will <i>prove</i> you know what u talkn bout
        <div>esports fanatic. i'm talkin' all the good stuff: Super Smash Bros. Melee, League of Legends, Starcraft (Brood War & 2), Overwatch, speedruns. </div>
        <br />
        <div class="links">
          <a href="mailto:jasperstephenson@gmail.com">email</a>
          <a href="https://twitter.com/midblue" target="_blank">twitter</a>
          <a href="https://www.linkedin.com/in/jasperstephenson" target="_blank">linkedIn</a>
          <a href="https://github.com/midblue" target="_blank">github</a>
        </div>
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

<style lang="scss" scoped>

  .me-pic {
    overflow: hidden;
    border-radius: 50%;
    margin: $grid-base * -20 auto;
    background-image: url('~/static/images/me.jpg');
    background-size: cover;
    width: $grid-base * 80;
    height: $grid-base * 80;
    z-index: 3;
    position: relative;
  }

  .about {
    @include full-width-with-pad();
    position: relative;
    z-index: 2;
  }

  .about-column {
    width: 100%;
    background: $panel;
    padding-bottom: $grid-base * 20;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: stretch;
    
    a {
      flex: 1;
      text-align: center;
      display: inline-block;
      margin: $grid-base;
      padding: $grid-base * 2 0;
      color: white;
      background: $active3;

      &:hover {
        color: white;
        background: $active;
      }
    }
  }

</style>
