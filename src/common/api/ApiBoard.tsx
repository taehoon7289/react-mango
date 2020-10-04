import ApiBase from 'common/api/ApiBase'

class ApiBoard extends ApiBase {
  /**
   * 게시물 리스트
   * @param params
   */
  async getListOfBoard(params = {}) {
    const res = await this.get('/api/user/boards/', params)
    return res.data
  }
}

export default new ApiBoard()
