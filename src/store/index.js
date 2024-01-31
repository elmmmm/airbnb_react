import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
const store = configureStore({
    reducer: {
        // 几个数据模块
        home: homeReducer,
        entire: entireReducer,
    }
})

export default store
