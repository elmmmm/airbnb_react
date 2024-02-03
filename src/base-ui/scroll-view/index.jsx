import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  /** 定义组件内部状态，控制按钮隐藏显示、内容移动距离 */
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()
  const scrollContentRef = useRef()
  useEffect(()=>{
    // 包含滚动的元素宽度
    const scrollWidth = scrollContentRef.current.scrollWidth
    // 元素可视区宽度
    const clientWidth = scrollContentRef.current.clientWidth
    // 可移动的长度距离
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    // 初始时，存在可供移动的距离时才有必要显示右侧按钮
    setShowRight(totalDistance > 0)
  }, [props.children])  

  function controlClickHandle(isRight){
    const nextIndex = isRight ? posIndex + 1 : posIndex - 1
    setPosIndex(nextIndex)
    // 下一个元素的左偏移
    const nextEl = scrollContentRef.current.children[nextIndex]
    const nextOffsetLeft = nextEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${nextOffsetLeft}px)`
    setShowRight(totalDistanceRef.current > nextOffsetLeft)
    setShowLeft(nextOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>
      ) }
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      ) }
        <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
            {/* 插槽 */}
            {props.children}
        </div>
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView