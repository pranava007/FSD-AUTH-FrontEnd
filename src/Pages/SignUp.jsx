import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const navigate = useNavigate()
    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

   

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const payload = {username,email,password}
        await axios.post('https://fsd-auth-backend.onrender.com/api/auth/register',payload)
        .then((res)=>{
            toast.success(res.data.message)    
            setUserName('')
            setEmail('')
            setPassword('')
            navigate('/signin')
       

        })
        .catch((error)=>{
            console.log(error);
            toast.error(error.response.data.message)
        })
    }

  return (
   <>
      <div>
        <h1 className="text-center mt-5 " > <strong>User Sign-Up</strong></h1>
        <form className=" m-5 border-dark" onSubmit={handleSubmit}>

        <div className=" mb-3 ">
            <label for="usename" className="form-label">
              User Name
            </label>
            <input
              type="text"
              name="usename"
              className="form-control"
              id="usename"
              aria-describedby="emailHelp"
              onChange={(e)=>{setUserName(e.target.value)}}
            />
           
          </div>
          <div className=" mb-3 ">
            <label for="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
               name="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={(e)=>setEmail(e.target.value)}
            />
           
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
               name="password"
              className="form-control"
              id="password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary">
          Sign-Up
          </button>

         
          
        </form>
     
      </div>
   </>
  )
}

export default SignUp