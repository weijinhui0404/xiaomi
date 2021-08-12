import { post ,get,delet,put} from "../utils/request"
export const addAddressApi = (params) => post("/api/v1/addresses", params)
export const getAddressApi = () => get("/api/v1/addresses")
export const getOnlyAddressApi = (id) => get("/api/v1/addresses/"+id)
<<<<<<< HEAD
export const editAddressApi = (id,params) =>put("/api/v1/addresses/"+id,params)

=======
export const editAddressApi = (id,params) =>put("/api/v1/addresses/"+id,{params})
>>>>>>> ef87c4c6432c439fb18453628f944f95d8ae8360
export const deletAddressApi = (id) =>delet("/api/v1/addresses/"+id)
