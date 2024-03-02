import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'


const EntireFilter = memo((props) => {
    // 过滤按钮可以多选，所以使用数组
    const [selectItems, setSelectItems] = useState([])
    function itemClickHandle(item){
        let newItems = [...selectItems]
        if(newItems.includes(item)){
            newItems = newItems.filter((val) => val !== item)
        }else{
            newItems.push(item)
        }
        setSelectItems(newItems)
    }
  return (
    <FilterWrapper>
        <div className='filter'>
        {
            filterData.map(item => {
                return (
                    <div className={classNames("item", {active: selectItems.includes(item)})} 
                    onClick={(e)=>{itemClickHandle(item)}}
                    key={item}
                    >
                        {item}
                    </div>
                )
            })
        }
        </div>
    </FilterWrapper>
    
  )
})

EntireFilter.propTypes = {}

export default EntireFilter