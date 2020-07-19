// 액션 타입
export const FETCH_BOARD = 'user/fetchBoard'
// 액션 생성자
export const fetchBoard = () => ({ type: FETCH_BOARD })
// 초기 상태
const initialState = {
  users: {},
  isEditing: false,
  editingUser: {}
}

// 리듀서
export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_BOARD:
      console.log(111)
      console.log(action.type)
      return state
    default:
      console.log(222)
      console.log(action.type)
      return state
  }
}
