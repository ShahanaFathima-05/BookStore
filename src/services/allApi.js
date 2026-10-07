import { data } from "react-router-dom";
import apiService from "../api/apiService";

//user registration
export const userRegisterApi=async(data)=>{
    return await apiService('POST','/register',data)
}

export const userLoginApi=async(data)=>{
    return await apiService('POST','/login',data)
}

//google-auth
export const googleAuthApi=async(data)=>{
    return await apiService('POST','/googlelogin',data)
}

export const profileEditApi=async (data)=>{
    return await apiService('PUT','./update',data)
}