import USerService from '../services/UserService'

const state = () => ({
  list: [],
  pagination: {
    page: 1,
    itemsPerPage: 10,
    sortBy: ['codigo'],
    sortDesc: [false]
  }
})

const mutations = {

  ADD_USER: (state, payload) => {
    state.list.push(payload)
  },

}

const actions = {
  REGISTRO: async ({ commit }, credentials) => {
    try {
      let { data, status } = await USerService.registro(credentials)
      if (status === 200) {
        console.log(data)
        commit('ADD_USER', data)
      }
      return { error: false, data, status }
    } catch (error) {
      return { data: error.response.data, status: error.response.status }
    }
  },
}


export default {
  state,
  mutations,
  actions,
}
