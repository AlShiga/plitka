import { createStore } from 'vuex'

export default createStore({
  state: {
    langEn: true
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
