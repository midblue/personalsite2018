<template>
  <div class="about page-content">
    <div class="about-column">

      <div class="me-pic"></div>
      <div class="right">
        <h3>
          Hi! I'm Jasper, a UX Engineer and Designer based on the U.S. West coast.
        </h3>

        <p>
          <strong>
            As a designer,
          </strong>
          I work across the spectrum of UX, interactive, and visual design with companies like <a href="http://www.adaptivepath.com/" target="_blank">Adaptive Path</a>, <a href="https://www.bluerocket.us/" target="_blank">Blue Rocket</a> and <a href="http://beyondux.com/" target="_blank">Beyond UX</a>. <!--I speak at and facilitate design events, such as the <nuxt-link to="/posts/globalgoalsjam">2017 Tokyo Global Goals Jam</nuxt-link>.--> I also <nuxt-link to="/posts/mentor">mentor</nuxt-link> up-and-coming designers, and occasionally find time to <nuxt-link to="/writing">write</nuxt-link> about design topics like <nuxt-link to="/posts/hud">the intersection of games and UX</nuxt-link>.
        </p>

        <p>
          <strong>
            As a developer,
          </strong>
          I design, build, and test full-stack experiences using tech like Vue, Node, and Firebase. While I lived in Tokyo, I built prototypes of new technologies with the research team at <a href="https://research.cygames.co.jp/" target="_blank">Cygames</a>. I'm a tinkerer by nature, and I've always got a <a href="https://github.com/midblue" target="_blank">side project</a> in the works.
        </p>

        <p>
          <strong>
            Personally,
          </strong>
          I've spent the last few years in Tokyo, Japan (日本語も喋ります). I'm a huge traveler – from 2013 to 2017 I moved to seven new places, all carrying one backpack. I'm also an <nuxt-link to="/posts/esports7">esports lover</nuxt-link>: Super Smash Bros. Melee, League of Legends, Starcraft (Brood War and 2), Overwatch, speedruns – I watch it all.
        </p>

        <p>
          If you're interested in working together, or if you just want to know what I'm up to, dont hesitate to <a href="mailto:jasperstephenson@gmail.com">email me</a> or check out my
          <a href="https://www.linkedin.com/in/jasperstephenson" target="_blank">LinkedIn page</a> to stay up to date.
        </p>

      </div>
    </div>
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
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: `UX engineer, friendly ghost` },
      ]
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.$store.commit('set', {
      userLanguage: window.navigator.userLanguage || window.navigator.language,
      page: 'about',
      pageCategory: 'about',
    })
  },
  methods: {},
}
</script>

<style lang="scss" scoped>

  .me-pic {
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: $grid-base * 12;
    overflow: hidden;
    background-image: url('~/static/images/me.jpg');
    background-size: cover;
    background-position: center right;
    width: $grid-base * 100;
    height: $grid-base * 100;
    border-radius: 50%;
    z-index: 3;
    position: relative;

    @include width (mobile) {
      border-radius: 0;
      width: 100%;
      height: $grid-base * 50;
      margin: 0;
      background-position: 100% 40%;
    }
  }

  .about {
    @include full-width-with-pad();
    position: relative;
    z-index: 2;
    
    @include width (mobile) {
      @include full-width-with-pad-mobile();
      padding: 0;
    }
  }

  .about-column {
    width: 100%;
    display: flex;
    margin-bottom: $grid-base * 25;

    @include width (mobile) {
      display: block;
      margin-bottom: $grid-base * 20;
    }
  }

  .right {
    flex-shrink: 1;
    flex-grow: 1;

    @include width (mobile) {
      @include full-width-with-pad-mobile();
      padding-top: $grid-base * 4;
    }
  }

  h3 {
    padding-top: 0;
    margin-top: 0;
  }

</style>
