import axios from 'axios'
import router from '../router'
import store from '../store'
import https from 'https'
export default () => {
    let http = axios.create({
      baseURL: "https://90h9amptse.execute-api.us-east-1.amazonaws.com",
      headers: {
        'Accept': 'application/json'
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    })
    if (store.getters.LOGGED_IN) {
      http.withCredentials=true
      http.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.BEARER_TOKEN
    }
  
    http.interceptors.response.use(response => response, (error) => {
      if (!error.response) {
        if (!axios.isCancel(error)) {
          console.log('not found')
        }
        return Promise.reject(error)
      } else {
        switch (error.response.status) {
          case 401:
            router.push({ name: 'Login' })
            break
          case 500:
            console.log('server error')
            break
          case 403:
            console.log('denegado')
            break
            
        }
        return Promise.reject(error)
      }
    })
  
    return http
  }