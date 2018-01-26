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
          slug: 'uxinjapan',
          img: '/placeholder/5.jpg',
          date: '2017–2018',
          description: `A four-part case study into my 1.5 years spent working as the only UX designer at a 2,000-person game company in Japan in which I try to run user interviews in a second language, to convince 200 engineers that something called "UX" is relevant to their work, and to train a UX mentee to be confident.`,
          parts: [
            'Level-Setting: Sharing UX Ideas With a Wary Audience',
            'Into the Fold: Teaching by Doing',
            'Education: Following Through From Research Through Implementation',
            'Dry Run: Chat Bot Project',
          ],
        },
        {
          title: 'Global Goals Jam Tokyo \'17 Recap',
          slug: 'globalgoalsjam',
          img: '/globalgoalsjam/1.jpg',
          date: 'Fall 2017',
          description: `Let's go fishing! I spent two solid days one fine Tokyo autumn with the Sea You Soon team at the 2017 Global Goals Jam, brainstorming and prototyping ways to get city-oriented Tokyoites and their children to engage with the natural water resources around them. "Global Goals Jam? What the heck is that!?" I hear you ask. Well, the Global Goals Jam (GGJ) is an annual event run simultaneously in 20? cities around the world, in which participants use UX design principles to address one of 23? sustainability goals put together by the United Nations Development Program. I was lucky enough to be selected as a facilitator by a colleague of mine, urbanist Mariko Sugita.`,
        },
        {
          title: 'Encouraging Low-Placing Tournament Entrants Using Bracket Data',
          slug: 'positivity',
          img: '/positivity/3.jpg',
          date: 'Winter 2017',
          description: `This is the story of a project that was born out of my own frustration and self-disgust. A story of feeling dejected, and worthless, and never wanting to come back. It turns out that going to a Super Smash Bros. Melee tournament might not always be as cheery as it sounds; no matter how friendly the competition, losing out 0-2 in tournament sucks. Like, /really/ sucks. It's the kind of thing that hits you in a strange spot of pride that you didn't know you had, and when I found myself in that spot, wanting to run and hide while I was among friends, all I could think was, "I have to fix this." This is a story about searching for redemption, for all of us down there, bravely grinding away in the lower half of the bracket. This is a story of positivity, and of gradual growth, and of being proud of what you achieved, even if you lost 0-2. This is one for the underdogs.`,
        },
        {
          title: 'How UX Fundamentals Adapt in the Game Industry',
          slug: 'gameux',
          img: '/placeholder/4.jpg',
          date: 'Winter 2017',
          description: 'This is an adaptation of a lightning talk I gave live in front of a gaggle of engineers at my last job, one that ',
        },
        {
          title: 'Using Social Media to Live-Detect System Issues',
          slug: 'monitor',
          img: '/placeholder/3.jpg',
          date: 'Summer 2017',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'In Defense of the Title "UX Engineer"',
          slug: 'uxengineer',
          img: '/placeholder/6.jpg',
          date: 'Spring 2018',
          description: `In which I explore the ins and outs of the weird and often obtuse spectrum of titles in the web-oriented design world, and why I believe that, as ridiculous as it may sound, it might be worth adding another to your vocabulary. At least it doesn\'t sound as silly as 'unicorn'... right?`,
          parts: [
            'The Wide World of UX-Adjacent Titles',
            'What IS a UX Engineer, Anyway?',
            'Why UX Engineers and Their Ilk are the Future',
          ],
        },
        {
          title: 'Mapping an Experience that Doesn\'t Exist Yet',
          slug: 'futurexmap',
          img: '/placeholder/2.jpg',
          date: 'Spring 2015',
          description: 'big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. big old long text intro. at least 4 or 5 lines of solid leadin. ',
        },
        {
          title: 'Using Nuxt to Create a Statically Generated Site From JSON Data',
          slug: 'staticsite',
          img: '/placeholder/1.jpg',
          date: 'Fall 2017',
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
