// redux新用法：tookit用法
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData } from "@/services";
// 异步任务
export const fetchHomeDataAction = createAsyncThunk("fetchdata", async (params)=>{
    console.log('fetchActionParams', params)
    const res = await getHomeGoodPriceData()
    return res
})
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, {payload}){
            state.goodPriceInfo = payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchHomeDataAction.fulfilled, (state, action) => {
            state.goodPriceInfo = action.payload
        })
    }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
