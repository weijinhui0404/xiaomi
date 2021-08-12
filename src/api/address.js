import { post ,get,delet,put} from "../utils/request"
export const addAddressApi = (params) => post("/api/v1/addresses", params)
export const getAddressApi = () => get("/api/v1/addresses")
export const getOnlyAddressApi = (id) => get("/api/v1/addresses/"+id)
export const editAddressApi = (id,params) =>put("/api/v1/addresses/"+id,{params})

export const deletAddressApi = (id) =>delet("/api/v1/addresses/"+id)
