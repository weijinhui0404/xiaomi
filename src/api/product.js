import {
    get
} from '../utils/request';

// 获取商品详情
export const reqProductDetail = (id) => get(
    "/api/v1/products/" + id
);