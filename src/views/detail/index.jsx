import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './detail-pictures'
import DetailInfos from './detail-infos'
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const {detailInfo} = useSelector((state) => {
    return {detailInfo: state.detail.detailInfo}
  }, shallowEqual)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed: false, topAlpha: false}))
  },[])
  return (
    <DetailWrapper>
      <AppHeader/>
      <DetailPictures/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail