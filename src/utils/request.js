import axios from "axios";
import {
  BASE_URL
} from "./tools"
import {
  getToken
} from "./auth"
const instance = axios.create({
  baseURL: BASE_URL,
  tiemout: 5000,
});
instance.interceptors.request.use(
  function (config) {
    //   在请求拦截里面统一设置header头
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const get = (url, params) => instance.get(url, {
  params
});
export const post = (url, data) => instance.post(url, data);
<<<<<<< HEAD
export const dele = (url, params) => instance.delete(url, {
  params
});
export default instance;
=======
export const delet = (url, params) => instance.delete(url, { params });
export const put = (url, params) => instance.put(url, { params });
export default instance;
>>>>>>> 17723f88bdd0071e32e6482d077e6a227a7d56c5
