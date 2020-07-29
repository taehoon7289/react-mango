import axios, { AxiosResponse } from 'axios'
import ApiCommon from 'common/api/ApiCommon'

type resultResponse = {
  code: number
  message: string
  entity: any
}

class ApiBoard extends ApiCommon {
  /**
   * 게시물 리스트
   * @param params
   */
  getListOfBoard(params = {}): Promise<resultResponse> {
    const url = '/api/user/boards/'
    return new Promise((resolve, reject) => {
      this.$axios
        .get(url, params)
        .then((resp: AxiosResponse) => resolve(resp.data))
        .catch(reject)
    })
  }
}

export default new ApiBoard()
