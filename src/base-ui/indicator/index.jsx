import React, { memo, useEffect, useRef, useState } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const contentRef = useRef()
    const {selectIndex = 0} = props
    useEffect(() => {
        const selectItemEl = contentRef.current.children[selectIndex]
        const itemLeft = selectItemEl.offsetLeft
        const itemWidth = selectItemEl.clientWidth
        const contentWidth = contentRef.current.clientWidth
        const contentScroll = contentRef.current.scrollWidth
        let distance = itemLeft - contentWidth*0.5 + itemWidth*0.5
        // 对于最左边和最右边的圆点不需要移动到中间
        if(distance < 0) distance = 0 //左边
        const totalDistance = contentScroll - contentWidth
        if(distance > totalDistance) distance = totalDistance
        contentRef.current.style.transform = `translate(${-distance}px)`
    }, [selectIndex])
    
  return (
    <IndicatorWrapper>
        <div className='i-content' ref={contentRef}>
            {
                props.children
            }            
        </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator