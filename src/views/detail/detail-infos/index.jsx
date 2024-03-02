import React, { memo } from 'react'
import AboutHouse from "@/assets/data/about_house";
import { InfosWrapper } from "./style";
import IconLeafLeft from "@/assets/svg/icon-leaf-left";
import IconLeafRight from '@/assets/svg/icon-leaf-right';
import Rating from '@mui/material/Rating';
import IconMedal from '@/assets/svg/icon_medal';
import SectionFooter from '@/components/section-footer';
import IconFlower from '@/assets/svg/icon_flower';
// import IconAvatar from '@/assets/svg/icon_avatar';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
const DetailInfos = memo(() => {
  return (
    <InfosWrapper>
      <div className='left'>
        <div className='titlePart'>
          <h1>{AboutHouse.title}</h1>
          <div>{AboutHouse.subtitle.join(" · ")}</div>
        </div>
        <div className='guestfavoritebanner'>
          <div className="recommend">
            <div className='icon'>
              <IconLeafLeft/>
              <div className='text'>房客 推荐</div>
              <IconLeafRight/>
            </div>
            <div>
              爱彼迎口碑房源，深受房客欢⁠迎
            </div>
          </div>
          <div className='rate'>
            <div className='count'>{AboutHouse.rating.toFixed(1)}</div>
            <Rating
            value={AboutHouse.rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A"}}
            />
          </div>
          <div className='line'></div>
          <div className='comment'>
            <div>{AboutHouse.comment}</div>
            <div className='last'>条评价</div>
          </div>
        </div>
        <div className='landlord'>
          <div className='avatar'></div>
          <div className='lordInfo'>
            <div className='name'>房东：{AboutHouse.landlord}</div>
            <div className='tip'>{AboutHouse.aboutLandlord}</div>
          </div>
        </div>
        <div className='features'>
        <div style={{"border-top": "1px solid rgb(221, 221, 221)"}}></div>
          {AboutHouse.features.map(item => (
            <div className='item'>
              <IconMedal></IconMedal>
              <div>
                <h3 className='summary'>{item.summary}</h3>
                <div className='detail'>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="overview">
          <div style={{"border-top": "1px solid rgb(221, 221, 221)"}}></div>
          <div className='text'>{AboutHouse.overview}</div>
          <SectionFooter/>
        </div>
        <div className='facility'>
            <div style={{"border-top": "1px solid rgb(221, 221, 221)"}}></div>
            <h2 className="title">房源亮点与便利设施</h2>
            <div className='section'>
              {AboutHouse.facility.map(item => 
                (<div className='item'>
                  <IconFlower/>
                  <span>{item}</span>
                </div>)
              )
              }
            </div>
        </div>
      </div>
      <div className='right'>
        <div className='paypanel'>
          <div className="book">
            <div className="price">
              ￥605
              <span>晚</span>
            </div>
            <div className='number'>
                <div className='date'>
                  <div className='in'>
                    <span className='label'>入住日期</span>
                    <span>2024/3/8</span>
                  </div>
                  <div className="out">
                    <span className='label'>退房日期</span>
                    <span>2024/3/10</span>
                  </div>
                </div>
                <div className='guest'>
                    <div className='text'>
                      <span className='label'>房客</span>
                      <span>1人</span>
                    </div>
                    <IconTriangleArrowBottom width={16} height={16}/>
                </div>
            </div>
            <div className='btn'>预订</div>
          </div>
          <div className="checklist">
            <div>
              <span>￥605×2晚</span>
              <span>￥1,209</span>
            </div>
            <div>
              <span>服务费</span>
              <span>￥171</span>
            </div>
          </div>
          <div className='total'>
              <div style={{"border-top": "1px solid rgb(221, 221, 221)", "margin": "30px 0"}}></div>
              <div className='text'>
                <span>总价</span>
                <span>￥1380</span>
              </div>
          </div>
        </div>
      </div>
    </InfosWrapper>
  )
})

export default DetailInfos