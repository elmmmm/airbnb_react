import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constans";

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
  })
  
  
export const changeIsLoadingAction = (isLoading) => ({
type: actionTypes.CHANGE_IS_LOADING,
isLoading
})

// action可以是一个函数，用来处理异步
export const fetchRoomListAction = (page=0) => {
    return async (dispatch, getState) => {
        dispatch(changeCurrentPageAction(page))
        // 发起异步请求数据
        dispatch(changeIsLoadingAction(true))  //数据加载中
        const res = await getEntireRoomList(page*20)
        const roomList = res.list || []
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
        dispatch(changeIsLoadingAction(false))
    }
}