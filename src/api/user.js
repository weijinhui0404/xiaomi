import {get, post} from "../utils/request"

// 二次封装注册
export const regApi = (user) =>post("/api/v1/auth/reg",user);

export const loginApi = (user)=>post("/api/v1/auth/login",user)

//获取用户信息
export const infoApi = () =>get("/api/v1/users/info")