import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'



const SideBar = ({currentUser, logout, openModal}) => {

  const sessionLinks = () => (
    <div id="session-links">
      <h3 className="yum-logo">Yummaly!</h3>
      <nav className="login-signup">
        <button onClick={() => openModal('button')}>Sign Up / Log In</button>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <div id="personal-greeting">
      <h3 className="yum-logo">Yummaly!</h3>
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.email}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    </div>
  );

  return (
    currentUser ?
    personalGreeting(currentUser, logout) :
    sessionLinks()
  );
};

export default SideBar;
