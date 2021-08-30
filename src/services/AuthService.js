import api from './Api'

const route = '/auth'

export default {
  login: credentials => api().post(`${route}/login`, credentials)
}