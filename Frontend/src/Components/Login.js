// src/components/Login.js
import React, { useState } from 'react';
import axiosInstance from '../api/AxiosInstance';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., save token, redirect)
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='email'
          className='form-control'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Login
      </button>
    </form>
  );
};

export default Login;
