import axios from "axios";
<<<<<<< HEAD
import {BASE_URL}  from "./tools"
import {getToken}  from  "./auth"
=======
import { BASE_URL } from "./tools";
import { getToken } from "./auth";
>>>>>>> ad3ffcbdb25f9612f2793b14ffa0ec6326412020
const instance = axios.create({
  baseURL: BASE_URL,
  tiemout: 5000,
});
instance.interceptors.request.use(
  function(config) {
    //   在请求拦截里面统一设置header头
    if (getToken()) {
      config.headers.authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const delet = (url, params) => instance.delete(url, { params });
export default instance;
