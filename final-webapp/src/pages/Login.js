import React from 'react';

import LoginForm from '../components/LoginForm';

function Login({ LoginFunction }) {
  return (
    <div className='Home_wrapper'>
      <h1 className='Title'>Login</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;