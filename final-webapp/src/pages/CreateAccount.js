import React from 'react';

import CreateAccountForm from '../components/CreateAccountForm';

function CreateAccount({ CreateAccountFunction }) {
  return (
    <div className='Home_wrapper'>
      <div className='Return'>
        <a href='/'>{'<'} Home</a>
      </div>
      <h1 className='Title'>Create Account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction}/>
    </div>
  );
}

export default CreateAccount;