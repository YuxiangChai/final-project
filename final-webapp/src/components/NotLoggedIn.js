import React from 'react';

function NotLoggedIn() {
  return (
    <div className='NotLoggedIn'>
      <h1>You are not logged in.</h1>
      <h1>Please <a href='/login'>sign in</a> or <a href='/create-account'>create an account</a> .</h1>
    </div>
  );
}

export default NotLoggedIn;