import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  // 派发action，请求数据并保存到store
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
    // dispatch()
  }, [dispatch])
  return (
    <EntireWrapper>
      <AppHeader/>
       <EntireFilter/>
       <EntireRooms/>
       <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire