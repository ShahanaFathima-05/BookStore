import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {

        const token = sessionStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        console.log('Response received')
        return response
    },

    (error) => {

        if (error.response) {

            const status = error.response.status

            if (status === 401) {
                console.log('Unauthorized access')
            }
            else if (status === 404) {
                console.log('API not found')
            }
            else if (status === 500) {
                console.log('Server error')
            }
            else {
                console.log('Error:', error.message)
            }

        } else {
            console.log('Error:', error.message)
        }

        return Promise.reject(error)
    }
)

export default axiosInstance