import React, { memo } from 'react'
import { Pagination } from "@mui/material";
import { PaginationWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo((props) => {
    const {totalCount, currentPage, roomList} = useSelector((state) => ({
        totalCount: state.entire.totalCount,
        currentPage: state.entire.currentPage,
        roomList: state.entire.roomList
    }), shallowEqual)

    const totalPage = Math.ceil(totalCount / 20)
    const startCount = currentPage * 20 + 1
    const endCount = (currentPage + 1) * 20
    // 切换页码事件
    const dispatch = useDispatch()
    function pageChangeHandle(event, pageNumber){
        // 回到顶部
        window.scrollTo(0, 0)
        // 更新页码及对应数据
        dispatch(fetchRoomListAction(pageNumber-1))
    }

  return (
    <PaginationWrapper>
        {
            !!roomList.length && (
                <div className='info'>
                    <Pagination count={totalPage} onChange={pageChangeHandle}></Pagination>
                    <div className='desc'>
                        第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
                    </div>
                </div>
            )
        }
    </PaginationWrapper>
  )
})

export default EntirePagination