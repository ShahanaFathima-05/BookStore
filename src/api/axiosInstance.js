import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})

axiosInstance.interceptors.response.use((response)=>{
    console.log('Response received')
    return response
},(error)=>{
    if(response.error){
        const status=response.error
        if(status==401){
            console.log('Unauthorized access')
        }else if(status==404){
            console.log('API not found')
        }else if(status==500){
            console.log('server error')
        }else{
            console.log('Error'+error.message)
        }
        return Promise.reject(error)
    }
})