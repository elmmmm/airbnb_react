import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";
// 使用 类 来封装，更具有内聚性
class FZRequest{
    constructor(baseURL, timeout){
        this.instance = axios.create({
            baseURL,
            timeout
        })
        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }

    request(config){
        return this.instance.request(config)
    }

    get(config){
        return this.request({...config, method: "get"})
    }

    post(config){
        return this.request({...config, method: "post"})
    }
}

const instance = new FZRequest(BASE_URL, TIME_OUT)
export default instance