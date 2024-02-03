import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { SetionV2Wrapper } from './style'
import SectionRooms from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";
import SectionHeader from "@/components/section-header";
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
    const {infoData} = props
    const initialName = Object.keys(infoData.dest_list)[0]
    const [name, setName] = useState(initialName)
    const tabNames = infoData.dest_address?.map(item => item.name)
    const tabClickHandle = useCallback(function(index, name){
      setName(name)
    }, []) //只在依赖改变时，才重新渲染子组件

  return (
    <SetionV2Wrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
          <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333%"/>
          <SectionFooter name={name}/>
    </SetionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2