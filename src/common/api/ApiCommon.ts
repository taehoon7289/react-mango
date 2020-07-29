import axios from 'axios'

class ApiCommon {
  $axios: any
  constructor() {
    this.$axios = axios.create({
      withCredentials: true,
    })
    // Add a request interceptor
    this.$axios.interceptors.request.use(
      (config: any) => this.handlerRequestSuccess(config),
      (error: any) => this.handlerRequestException(error),
    )

    // Add a response interceptor
    this.$axios.interceptors.response.use(
      (config: any) => this.handlerResponseSuccess(config),
      (error: any) => this.handlerResponseException(error),
    )
  }
  handlerRequestSuccess(config: any) {
    return config
  }
  handlerResponseSuccess(config: any) {
    return config
  }
  handlerRequestException(config: any) {
    return config
  }
  handlerResponseException(error: any) {
    const res = error.response
    console.log('handlerResponseException', res)
    console.log('response status', res.status)
    if (res.status === 401) {
      console.log('토큰 문제임')
    }
    return Promise.reject(error)
  }
}

export default ApiCommon
