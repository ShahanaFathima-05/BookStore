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
    return await apiService('PUT','/update',data)
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

export const userAddedBooksApi=async()=>{
    return await apiService('GET','/userbooks')
}

export const deleteBookApi=async(id)=>{
    return await apiService('DELETE',`/deletebook/${id}`)
}

export const purchasedBooksApi=async()=>{
    return await apiService('GET','/purchasedbooks')
}

export const bookDetailApi=async(bid)=>{
    return await apiService('GET',`/bookdetail/${bid}`)
}

export const bookPaymentApi=async(bid)=>{
    return await apiService('GET',`/payment/${bid}`)
}

export const adimAllboooksApi=async()=>{
    return await apiService('GET','/admin/allbooks')
}

export const approvedbookApi=async(bid)=>{
    return await apiService('GET',`/admin/approvebook/${bid}`)
}

export const adminAllusersApi=async()=>{
    return await apiService('GET','/admin/allusers')
}

// Admin profile update
export const adminUpdateApi = async (data) => {
  return await apiService('PUT', '/update', data)
}