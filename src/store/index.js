import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";
import mainReducer from "./modules/main";
const store = configureStore({
    reducer: {
        // 几个数据模块
        main: mainReducer,
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer
    }
})

export default store
