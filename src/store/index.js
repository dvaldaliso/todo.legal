import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppStore'
import Auth from './AuthStore'
import USer from './UserStore'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    App,
    Auth,
    USer
   },
   plugins: [
    createPersistedState({
      paths: [
        'Auth.user',
        'Auth.token'
      ],
    })
  ]
})
