import React from 'react';
import Logo from '../components/Logo.png';

function Header({ LogoutFunction, isLoggedIn, userInformation }) {
  return (
    <div className='Header_wrapper'>
      <header className='Header'>
        <img className='Logo' src={Logo} alt='' />
        <nav className='Navi'>
          {isLoggedIn && <a className='Active' href='/'>Hi, {userInformation.toUpperCase()}</a>}
          {!isLoggedIn && <a href='/create-account'>Create Account</a>}
          <h2> | </h2>
          {!isLoggedIn && <a href='/login'>Login</a>}
          {isLoggedIn && <a onClick={() => LogoutFunction()}>Log Out</a>}
        </nav>
      </header>
    </div>
    
  )
}

export default Header;