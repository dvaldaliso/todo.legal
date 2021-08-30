import api from './Api'

const route = '/user'

export default {
  registro: credentials => api().post(`${route}`, credentials)
}