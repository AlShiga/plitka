import { createStore } from 'vuex'

export default createStore({
  state: {
    langEn: true,
    linkAdmin: 'https://ava.avadev.ru'
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
