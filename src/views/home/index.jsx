import React, { memo, useEffect,  } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeLongfor from './c-cpns/home-longfor'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { isEmptyO } from "@/utils";

const Home = memo(() => {
  // 获取redux中的数据
  const { goodPriceInfo, highScoreInfo, discountInfo,hotRecommendInfo,longforInfo, plusInfo} = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo: state.home.hotRecommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo
    }),
    shallowEqual
  );
  // 派发redux中的任务
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("home get data"));
  }, [dispatch]);


  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}/>}
        { isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/> }
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  );
});

export default Home;
