import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPasswords = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/forget-password", { email });
      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-bg-gradient'>
      <div className='bg-white p-3 rounded w-28'>
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email address</strong></label>
            <input
              type="email"
              className='form-control rounded-1'
              placeholder='Enter your Email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-1'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswords;
