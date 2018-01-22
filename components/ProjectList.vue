<template>
  <section class="projects">
    <ProjectEntry
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :img="project.img"
      :description="project.description"
    />
  </section>
</template>

<script>
import ProjectEntry from '~/components/ProjectEntry'

export default {
  props: [ 'projects', ],
  components: { ProjectEntry, },
  data () {
    return {}
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
