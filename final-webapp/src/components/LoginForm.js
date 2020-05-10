import React from 'react';

function LoginForm({ LoginFunction }) {
  return (
    <div className='Form_wrapper'>
      <form className='Form' onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor='loginEmail'>Email</label>
        <input type='text' name='loginEmail' placeholder='Your Email Address'/>
        <label htmlFor='loginPassword'>Password</label>
        <input type='password' name='loginPassword' placeholder='Your Password'/>
        <button>Submit</button>
        <a href='/create-account'>Don't have an account?</a>
      </form>
    </div>
  );
}

export default LoginForm;