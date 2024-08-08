import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://fsd-auth-backend.onrender.com/api/auth/reset-password/${id}/${token}`, { password });
      if (response.data.status === 200) {
        toast.success(response.data.message);
        navigate('/signin');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-bg-gradient'>
      <div className='bg-white p-3 rounded w-28'>
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="Password"><strong>New Password</strong></label>
            <input
              type="password"
              name='Password'
              className='form-control rounded-1'
              placeholder='Enter your Password'
              id='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-1'>Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
