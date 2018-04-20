<template>
  <section class="about page-content">
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
          I work across the spectrum of UX, interactive, and visual design with companies like <a href="http://www.adaptivepath.com/" target="_blank">Adaptive Path</a>, <a href="https://www.bluerocket.us/" target="_blank">Blue Rocket</a> and <a href="http://beyondux.com/" target="_blank">Beyond UX</a>. I speak at and facilitate design events, such as the <nuxt-link to="/posts/globalgoalsjam">2017 Tokyo Global Goals Jam</nuxt-link>. I also <nuxt-link to="/posts/mentor">mentor</nuxt-link> up-and-coming designers, and occasionally find time to write about design topics like <nuxt-link to="/posts/hud">the intersection of games and UX</nuxt-link>.
        </p>

        <p>
          <strong>
            As a developer,
          </strong>
          I design, build, and test full-stack experiences using tech like Vue, React, Express, and Firebase. While I lived in Tokyo, I built live prototypes of new technologies with the research team at <a href="https://research.cygames.co.jp/" target="_blank">Cygames</a>. I'm a tinkerer by nature, as evidenced by my <a href="https://github.com/midblue" target="_blank">Github</a> full of tests and projects.
        </p>

        <p>
          <strong>
            Personally,
          </strong>
          I've spent the last few years in Tokyo, Japan and I speak Japanese fluently. I'm a huge traveler – from 2013 to 2017 I moved to seven new places, all carrying one backpack. I'm also an esports lover: Super Smash Bros. Melee, League of Legends, Starcraft (Brood War and 2), Overwatch, speedruns – I watch it all.
        </p>

        <p>
          If you're interested in working together, or if you just want to know what I'm up to, dont hesitate to <a href="mailto:jasperstephenson@gmail.com">email me</a> or check out my 
          <a href="https://www.linkedin.com/in/jasperstephenson" target="_blank">LinkedIn page</a> to stay up to date.
        </p>
        
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
    margin-right: $grid-base * 8;
    overflow: hidden;
    background-image: url('~/static/images/me.jpg');
    background-size: cover;
    background-position: center right;
    background-color: rgba($active2, .1);
    background-blend-mode: screen;
    width: $grid-base * 100;
    height: $grid-base * 100;
    border-radius: 50%;
    z-index: 3;
    position: relative;
  }

  .about {
    @include full-width-with-pad();
    position: relative;
    z-index: 2;
    // color: white;
  }

  .about-column {
    width: 100%;
    display: flex;
    margin-bottom: $grid-base * 40;
  }

  .right {
    flex-shrink: 1;
    flex-grow: 1;
  }

  h3 {
    padding-top: 0;
    margin-top: 0;
  }

  .links {
    width: 100%;
    display: flex;
    justify-content: stretch;
    
    a {
      flex: 1;
      text-align: center;
      display: inline-block;
      // margin: $grid-base;
      padding: $grid-base * 2 0;
    //   color: white;
    //   background: $active3;

    //   &:hover {
    //     color: white;
    //     background: $active;
    //   }
    }
  }

</style>
