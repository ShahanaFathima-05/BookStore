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

export const addBookApi=async (data)=>{
    return await apiService('POST','/addbook',data)
}

export const latestBooksApi=async()=>{
    return await apiService('GET','/latestbooks')
}

export const booklistApi=async()=>{
    return await apiService('GET','/booklist')
}