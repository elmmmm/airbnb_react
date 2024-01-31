import React, { memo, useEffect,  } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeWrapper from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import SectionRooms from "@/components/section-room";

const Home = memo(() => {
  // 获取redux中的数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 派发redux中的任务
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("homexxx"));
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
