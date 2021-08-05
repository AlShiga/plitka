import { createStore } from 'vuex'

export default createStore({
  state: {
    langEn: true,
    linkAdmin: 'http://ava/'
  },
  mutations: {
    selectLang (state) {
      state.langEn = !state.langEn
    }
  },
  actions: {
  },
  modules: {
  }
})
