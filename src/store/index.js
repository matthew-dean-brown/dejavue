import { createStore } from 'vuex'

export default createStore({
  state: {
    friends:null,
    cars: null,
    consoles:null
  },
  getters: {
  },
  mutations: {
    setfriends(state, payload){
      state.friends = payload
    },
    setCars(state, payload){
      state.cars = payload
    },
    setConsoles(state, payload){
      state.consoles = payload
    },
  },
  actions: {
    
  },
  modules: {
  }
})
