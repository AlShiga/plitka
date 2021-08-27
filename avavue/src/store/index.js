import { createStore } from 'vuex'

export default createStore({
  state: {
    langEn: true,
    showMenu: false,
    loadFirst: false,
    linkAdmin: 'https://ava.avadev.ru',
    blogPost: [],
    prPost: [],
    prMPost: []
  },
  mutations: {
    toggleMenu (state) {
      state.showMenu = !state.showMenu
    },
    hideMenu (state) {
      state.showMenu = false
    },
    selectLang (state) {
      state.langEn = !state.langEn
    },
    addBlogPost (state, arr) {
      state.blogPost = arr
    },
    addPrPost (state, arr) {
      state.prPost = arr
    },
    addPrMPost (state, arr) {
      state.prMPost = arr
    },
    loadedFirst (state) {
      state.loadFirst = true
    }

  },
  actions: {
  },
  modules: {
  }
})
