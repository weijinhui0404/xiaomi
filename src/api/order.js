import {post,get, delet} from "../utils/request";

export const addorder = (data) => post("api/v1/orders", data)
export const getOrderApi = ()=>get("/api/v1/orders")
export const getOrderDetailApi = (id)=>get("/api/v1/orders/"+id)

export const deletOrderDetailApi = (id)=>delet("/api/v1/orders/"+id)