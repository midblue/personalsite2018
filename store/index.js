import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      userLanguage: '',
      page: 'home',
      pageCategory: 'projects',
      winWidth: -1,
      lightboxSrc: null,
    },
    mutations: {
      set (state, payload) {
        for (let p in payload)
          state[p] = payload[p]
      }
    }
  })
}