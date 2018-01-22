<template>
  <div class="page-content">
    <ProjectList
      :projects="projects"
    />
    <Nav
      :sections="projects"
    />
  </div>
</template>

<script>
import ProjectList from '~/components/ProjectList'
import Nav from '~/components/Nav'

export default {
  layout: 'home',
  props: [],
  components: { ProjectList, Nav, },
  data () {
    return {
      projects: [
        {
          title: 'Bringing UX Thinking to a Traditionally Japanese Company',
          nickname: 'uxinjapan',
          img: '/placeholder/5.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Global Goals Jam Tokyo \'17 Recap',
          nickname: 'globalgoalsjam',
          img: '/global-goals-jam/1.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Encouraging Low-Placing Tournament Entrants Using Bracket Data',
          nickname: 'positivity',
          img: '/positivity/3.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'How UX Fundamentals Adapt in the Game Industry',
          nickname: 'gameux',
          img: '/placeholder/4.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Using Social Media to Live-Detect System Issues',
          nickname: 'monitor',
          img: '/placeholder/3.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Mapping an Experience that Doesn\'t Exist Yet',
          nickname: 'futurexmap',
          img: '/placeholder/2.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Using Nuxt to Create a Statically Generated Site From JSON Data',
          nickname: 'staticsite',
          img: '/placeholder/1.jpg',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
      ],
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

<style lang="scss">

</style>
