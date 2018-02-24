import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state: {
      userLanguage: 'en-us',
      page: 'home'
    },
    mutations: {
      set (state, payload) {
        for (let p in payload)
          state[p] = payload[p]
      }
    }
  })
}