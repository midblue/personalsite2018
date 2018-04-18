import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      userLanguage: 'ja',
      page: 'home',
      winWidth: -1,
    },
    mutations: {
      set (state, payload) {
        for (let p in payload)
          state[p] = payload[p]
      }
    }
  })
}