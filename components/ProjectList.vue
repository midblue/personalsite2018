<template>
  <section class="projects">
    <ProjectEntry
      v-for="project in projects"
      :key="project.title"
      v-bind="project"
    />
  </section>
</template>

<script>
import ProjectEntry from '~/components/ProjectEntryFixedWidth'

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
