import React from 'react';

function CreateAccountForm({ CreateAccountFunction }) {
  return (
    <div className='Form_wrapper'>
      <form className='Form' onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor='createEmail'>Email</label>
        <input type='email' name='createEmail' />
        <label htmlFor='createPassword'>Password</label>
        <input type='password' name='createPassword' />
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default CreateAccountForm;