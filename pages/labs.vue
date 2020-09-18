<template>
  <div class="page-content labs">
		<div v-html="labs"></div>
		<!-- <LabsPost v-for="(post, index) in posts" :key="'labs'+index" v-bind="post" /> -->
  </div>
</template>

<script>
import LabsPost from '~/components/LabsPost'

export default {
  props: [],
  components: {LabsPost },
  data() {
    return {}
  },
  asyncData() {
		const content = require(`~/static/labs/labs.md`).default.replace(/href=/gi, 'target="_blank" href=').replace(/src=/gi, 'align="top" src=').split('<hr />').map(lab => {
			return lab
		})
    return {content}
  },
  head() {
    return {
      title: 'Labs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `UX engineer, friendly ghost.`,
        },
      ],
    }
  },
  computed: {
		labs () {
			return this.content.join('<hr />')
		}
  },
  watch: {},
  mounted() {
    this.$store.commit('set', {
      page: 'labs',
      pageCategory: 'labs',
    })
  },
  methods: {},
}
</script>

<style lang="scss">
.labs {
	max-width: 1000px;
	margin-bottom: 20vh;

	@include width (mobile){
		max-width: 100%;
		overflow-x: hidden;
		padding-left: $content-pad-mobile;
		padding-right: $content-pad-mobile;
	}
	
	h2 {
		margin-bottom: 0;
	}
	h4 {
		margin-top: .3em;
		margin-bottom: 1.5em;
	}

	hr {
		margin: 8em auto;
		background: none;
		border: 1px solid #ddd;
		max-width: 200px;

		@include width (mobile){
			margin: 4em auto;
		}
	}

	img{
		max-width: 200px;
		max-height: 200px;
		margin: 2em;
	}
	img:first-child {
		float: left;
		max-width: 400px;
		max-height: 550px;
		margin: 0 3em 8em 0
	}
	img {
		@include width (mobile){
			display: block;
			max-width: 100% !important;
			float: none !important;
			margin: 0 auto 1em auto !important;
		}
	}
	video{
		margin: 0 auto;
		max-width: 100%;
	}
	.videowrapper {
		text-align: center;
	}

	hr {
		clear: both;
	}
}
</style>
