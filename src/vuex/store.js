
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import * as actions from './actions'
import * as mutations from './mutations'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions,
  state: {
    drawer: false,
    category: {},
    news: [],
    pageNumber: 1,
    skip: 0,
    limit: 25,
    length: 0
  },
  mutations: mutations.default,
  plugins: [vuexLocal.plugin]
})

