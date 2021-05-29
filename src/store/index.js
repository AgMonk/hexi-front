import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: "target",
  },
  getters: {
    getCity(state) {
      return state.city
    }
  },
  mutations: {
    setCity(state, name) {
      state.city = name;
    }
  },
  actions: {
    setCityName({commit}, name) {
      commit('setCity', name)
    }
  },
  modules: {
  }
})
