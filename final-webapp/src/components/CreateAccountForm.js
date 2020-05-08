import React from 'react';

function CreateAccountForm({ CreateAccountFunction }) {
  return (
    <div className='Form_wrapper'>
      <form className='Form' onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor='createEmail'>Email</label>
        <input type='email' name='createEmail' placeholder='Your Email Address'/>
        <label htmlFor='createPassword'>Password</label>
        <input type='password' name='createPassword' placeholder='Your Password'/>
        <button>Create Account</button>
        <a href='/login'>Already have an account?</a>
      </form>
    </div>
  )
}

export default CreateAccountForm;