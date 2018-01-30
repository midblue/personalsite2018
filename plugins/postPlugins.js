import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
	adapter: {
		loaded({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }) {
			// do something here
			// example for call LoadedHandler
			console.log('loaded', naturalHeight, naturalWidth)
		},
		loading(listener, Init) {
			console.log('loading')
		},
		error(listener, Init) {
			console.log('error')
		}
	}
})