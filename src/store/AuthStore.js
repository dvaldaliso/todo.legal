import AuthService from '../services/AuthService'

const initialState = {
  name: '',
  lastname: '',
  username: ''
}

const state = () => ({
  token: null,
  user: initialState
})

const mutations = {
  AUTH_SUCCESS: (state, { token, user }) => {
    state.user = user
    state.token = token
    console.log(state.user)
  },
  UPDATE_Token: (state, payload) => {
    state.token=payload
  },
  FINALIZAR: (state) => {
    state.user=null
  },


}

const actions = {
  LOGIN: async ({ commit }, credentials) => {
    try {
      let { data, status } = await AuthService.login(credentials)
      if (status === 200) {
        let token = data.access_token
        let user = data
         commit('AUTH_SUCCESS', { token, user})
      }
      return {data: data, error: null}
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
  FINALIZAR: async ({ commit }) => {
    try {
      commit('FINALIZAR')
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
