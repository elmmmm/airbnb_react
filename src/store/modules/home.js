// redux新用法：tookit用法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData,getHomePlusData } from "@/services";
// 异步任务
// export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (params)=>{
//     console.log('fetchActionParams', params) //params为派发时传入的参数
//     const res = await getHomeGoodPriceData()
//     return res
// }) 这样写不方便同时请求几组数据，所以换成下面的写法
export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, {dispatch}) => {
    getHomeGoodPriceData().then((res)=>{
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeHighScoreData().then((res)=>{
        dispatch(changeHighScoreInfoAction(res))
    })
    getHomeDiscountData().then(res => {
        dispatch(changeDiscountInfoAction(res))
    })
    getHomeHotRecommendData().then( res => {
        dispatch(changeHotRecommendInfoAction(res))
    })
    getHomeLongforData().then(res => {
        dispatch(changeLongforInfoAction(res))
    })
    getHomePlusData().then(res => {
        dispatch(changePlusInfoAction(res))
      })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, {payload}){
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, {payload}){
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, {payload}){
            state.hotRecommendInfo = payload
        },
        changeLongforInfoAction(state, {payload}){
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
          }
    },
    extraReducers(builder){
        // builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
        //     state.goodPriceInfo = action.payload
        // })
    }
})

export const { changeGoodPriceInfoAction, 
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer
