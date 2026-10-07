import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import { toast,ToastContainer } from 'react-toastify'
import { profileEditApi } from '../../services/allApi'
import { useNavigate } from 'react-router-dom'

function ProfileUpdate({ setsideBar }) {

    const [userdata,setUserdata]=useState({
      id:"",username:"",email:"",password:"",bio:"",picture:"",role:''
    })

    const nav=useNavigate()

    const [existingPicture,setExistingpicture]=useState("")
    const [fileType,setFiletype]=useState('')
    const [preview,setPreview]=useState('')

    useEffect(()=>{
      if(sessionStorage.getItem('token') && sessionStorage.getItem('user')){
        const user=JSON.parse(sessionStorage.getItem('user'))
        setUserdata({...userdata,username:user.username,role:user.role,bio:user.bio,id:user._id,email:user.email})
        setExistingpicture(user.picture)
      }
    },[])

    const handleFileUpload=(e)=>{
      if(e.target.files[0].type.includes('image/')){
        setFiletype(true)
        setUserdata({...userdata,picture:e.target.files[0]})
        setPreview(URL.createObjectURL(e.target.files[0]))
      }
      else{
        setFiletype(false)
      }
    }

    const handleCancel=()=>{
      const user=JSON.parse(sessionStorage.getItem('user'))
      setUserdata({...userdata,username:user.username,role:user.role,bio:user.bio,id:user._id,email:user.email})
      setFiletype(false)
      setPreview(false)
      setsideBar(false)
    }

    const handleprofileupdate=async()=>{
      const {username,email,password,bio}=userdata
      if(!username || !email || !password || !bio){
        toast.warning('Enter Valid Inputs')
      }
      else{
        if(userdata.picture){
          const formData=new FormData()
          formData.append('id',userdata.id)
          formData.append('username',userdata.username)
          formData.append('password',userdata.password)
          formData.append('role',userdata.role)
          formData.append('email',userdata.email)
          formData.append('bio',userdata.bio)
          formData.append('picture',userdata.picture)
          const response=await profileEditApi(formData)
          console.log(response)
          if(response.status===200){
            toast.success('Profile Upadted')
            setTimeout(()=>{
              handleCancel()
              nav('/')
            },2000)
          }
        }
        else{
          const response=await profileEditApi(userdata)
          console.log(response)
        }
      }
    }
  

  return (
    <div className="h-screen w-screen fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="h-screen w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white fixed top-0 left-0 shadow-lg">
        <div className="bg-black text-white p-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <button onClick={() => setsideBar(false)} className="hover:text-red-500">Close</button>
        </div>
        <div className="flex justify-center my-5">
          <label htmlFor="fileimg" className="cursor-pointer">
            <input type="file" id="fileimg" onChange={(e)=>{handleFileUpload(e)}} className="hidden"  accept="image/*" />
            {
              existingPicture=='' ?
              <img src={preview?preview:"https://www.svgrepo.com/show/487313/edit-profile.svg"} alt="Edit profile" className="w-28 h-28"/>
              :
              existingPicture.includes('lh3.googleusercontent.com')?
              <img src={preview?preview:existingPicture} alt="profile" className='w-28 h-28'/>
              :
              <img src={preview?preview:`${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="profile" className="w-28 h-28" />
            }
            {
              !fileType && <span className='text-amber-300' >File must be a image</span>
            }
            
          </label>
        </div>
        <div className="p-5">
          <input type="email" placeholder="Email" onChange={(e)=>{setUserdata({...userdata,email:e.target.value})}} value={userdata.email} className="border w-full p-3 mb-3 rounded"/>
          <input type="text" placeholder="Username" onChange={(e)=>{setUserdata({...userdata,username:e.target.value})}} value={userdata.username} className="border w-full p-3 mb-3 rounded"/>
          <input type="password" placeholder="Password" onChange={(e)=>{setUserdata({...userdata,password:e.target.value})}} value={userdata.password} className="border w-full p-3 mb-3 rounded"/>
          <textarea placeholder="Bio" rows="4" onChange={(e)=>{setUserdata({...userdata,bio:e.target.value})}} value={userdata.bio} className="border w-full p-3 mb-3 rounded resize-none"/>
          <div className="flex justify-between">
            <button onClick={handleprofileupdate} className="bg-white border text-black px-5 py-2 rounded">Update</button>
            <button onClick={handleCancel} className="bg-black text-white px-5 py-2 rounded">Cancel</button>
          </div>
        </div>
        <ToastContainer position='top-center' autoClose={'3000'}/>
      </div>
    </div>
  )
}

export default ProfileUpdate
