import AxiosConfig from 'common/config/AxiosConfig'
import queryString from 'query-string'

class ApiBase extends AxiosConfig {
  get(path: string, params = {}) {
    return this.$axios.get(path, { params })
  }

  patch(path: string, payload: FormData) {
    return this.$axios.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    })
  }

  post(path: string, payload: FormData) {
    return this.$axios.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    })
  }

  queryPost(path: string, payload: any) {
    payload = `${queryString.stringify(payload)}`
    return this.$axios.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    })
  }

  multiPost(path: string, payload: FormData) {
    return this.$axios.request({
      headers: { 'Content-Type': 'multipart/form-data' },
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    })
  }
  delete(path: string, params = {}) {
    return this.$axios.delete(path, { params })
  }
}

export default ApiBase
