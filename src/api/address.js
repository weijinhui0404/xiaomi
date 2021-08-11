import { post ,get} from "../utils/request"
export const addAddressApi = (params) => post("/api/v1/addresses", params)
export const getAddressApi = () => get("/api/v1/addresses")
export const editAddressApi = (id) =>get("/api/v1/addresses/"+id)
export const deletAddressApi = (id) =>post("/api/v1/addresses/"+id)
