import React from 'react';

import LoginForm from '../components/LoginForm';

function Login({ LoginFunction }) {
  return (
    <div className='Home_wrapper'>
      <div className='Return'>
        <a href='/'>{'<'} Home</a>
      </div>
      <h1 className='Title'>Login</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;