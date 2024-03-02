import React, { memo, useState, useRef } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  // 组件内部的状态
  const [isSearch, setIsSearch] = useState(false)
  // 从redux中获取数据
  const {headerConfig} = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig
  // 监听滚动，页面滚动一定距离后收起搜索栏
  const {scrollY} = useScrollPosition()
  const prevY = useRef(0) //保存弹出搜索栏时，页面所在位置
  if(!isSearch) prevY.current = scrollY
  if(isSearch && Math.abs(scrollY-prevY.current) > 150) setIsSearch(false)
  // 页面位于顶部时，颜色为透明
  const isAlpha = topAlpha && scrollY == 0 

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isSearch} />
        </div>
        {/* 点击灰色蒙版，取消搜索 */}
        { isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
    </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader