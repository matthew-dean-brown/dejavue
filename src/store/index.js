import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    friends:null,
    cars: null,
    consoles:null
  },
  getters: {
  },
  mutations: {
    setFriends(state, payload){
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
    async getInfo({commit}){
      let {data} = await axios.get('https://matthew-dean-brown.github.io/dejavue/data/')
      let {cars, friends, gaming_consoles} = data
      // console.log(api.data);
      commit('setCars', cars)
      commit('setConsoles', gaming_consoles)
      commit('setFriends', friends)
    }
  },
  modules: {
  }
})
