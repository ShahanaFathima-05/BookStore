import apiService from "../api/apiService";

//user registration
export const userRegisterApi=async(data)=>{
    return await apiService('POST','/register',data)
}