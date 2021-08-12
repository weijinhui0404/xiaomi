import {
    post
} from "../utils/request";

export const addorder = (data) => post("api/v1/orders", data)