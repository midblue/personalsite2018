<template>
  <section class="projects">
    <ProjectEntry
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
    />
  </section>
</template>

<script>
import ProjectEntry from '~/components/ProjectEntry'

export default {
  props: [],
  components: { ProjectEntry, },
  data () {
    return {
      projects: [
        {
          title: '1'
        },
        {
          title: '2'
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
