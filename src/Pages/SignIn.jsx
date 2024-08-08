import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

    const navigate = useNavigate()
  
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSumibt = async(e)=>{
        e.preventDefault()
        const payload = {email,password}

        await axios.post('http://localhost:5000/api/auth/login',payload)
        .then((res)=>{
            toast.success(res.data.message)
            setEmail('')
            setPassword('')
            navigate('/home')
        })
        .catch((error)=>{
            toast.error(error.response.data.message)
        })
    }

  return (
    <>
      <div>
        <h1 className="text-center" >Sign In</h1>
        <form className=" m-5 border-dark"  onSubmit={handleSumibt}>
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
              onChange={(e)=>{setEmail(e.target.value)}}
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
            Sin-In
          </button>
          <br />
          <Link to='/signup'>Back</Link>
          <Link to="/forgetpassword">Forgot Password?</Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
