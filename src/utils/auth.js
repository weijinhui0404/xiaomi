import {TOKEN} from "./tools"
export const isLogined =()=>{
    if(localStorage.getItem("token")){
        return true;
    }
}

export const setToken =(token)=>{
    localStorage.setItem(TOKEN,token)
}
export const getToken = () =>{
    return localStorage.getItem("token") || ""
}
export const removeToken = () =>{
    localStorage.removeItem("token");
}