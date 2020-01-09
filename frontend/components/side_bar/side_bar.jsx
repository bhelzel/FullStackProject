import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'



const SideBar = ({currentUser, logout, openModal}) => {

  const sessionLinks = () => (
    <div id="session-links">
      <h3 className="yum-logo">Yummaly!</h3>
      <div className="line-div"></div>
      <nav className="login-signup">
        <button
          onClick={() => openModal('button')}
          className="login-signup-button">
          Sign Up / Log In
        </button>
      </nav>
    </div>
  );

  const personalGreeting = () => (
    <div id="personal-greeting">
      <h3 className="yum-logo">Yummaly!</h3>
      <Link to="/profile"><h2 className="header-name">
        Hi, {currentUser.email}!
      </h2></Link>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  return (
    <div className="sidebar">
      {
        currentUser ?
        personalGreeting() :
        sessionLinks()
      }
    </div>
  );
};

export default SideBar;
