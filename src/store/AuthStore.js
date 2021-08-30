import AuthService from '../services/AuthService'

const initialState = {
  first_name: '',
  last_name: '',
  email: ''
}

const state = () => ({
  token: null,
  user: initialState
})

const mutations = {
  AUTH_SUCCESS: (state, { token, user }) => {
    state.user = user
    state.token = token
  },
  UPDATE_Token: (state, payload) => {
    state.token=payload
  },


}

const actions = {
  LOGIN: async ({ commit }, credentials) => {
    try {
      console.log('store')
      let { data, status } = await AuthService.login(credentials)
      if (status === 200) {
        console.log(data)
        let token = data.access_token
        let user = data.user
         commit('AUTH_SUCCESS', { token, user})
      }
      return null
    } catch (error) {
      return { data: error.response.data, status: error.response.status }
    }
  },
  UPDATE_Token: async ({ commit },payload) => {
    try {
      commit('UPDATE_Token', payload)
      return null
    } catch (error) {
      return error
    }
  },
}

const getters = {

  CURRENT_USER: state => {
    return state.user
  },

  LOGGED_IN: state => {
    return state.token !== null
  },

  BEARER_TOKEN: state => {
    return state.token
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
