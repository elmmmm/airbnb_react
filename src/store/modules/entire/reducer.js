import * as actionTypes from "./constans";
// 初始状态
const initialState = {
    currentPage: 0, //当前页码
    roomList: [], //当前数据列表
    totalCount: 0, //数据总个数
    isLoading: false  //数据加载状态
}

function reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case actionTypes.CHANGE_ROOM_LIST:
            return {...state, roomList: action.roomList}
        case actionTypes.CHANGE_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount}
        case actionTypes.CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

export default reducer