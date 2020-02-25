import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';


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
      <Link to="/createrecipe" id="create-recipe-link">Create Recipe</Link>
    </div>
  );

  const personalGreeting = () => (
    <div id="personal-greeting">
      <Link to="/"  id="yum-logo-sb-greeting">
        <h3 className="yum-logo">Yummaly!</h3>
      </Link>
      <Link to="/profile" id="greeting-link">
        <div className="greeting-icon">
          <img
            className="greeting-icon-img"
            src="https://img.icons8.com/color/48/000000/the-birth-of-venus.png"
          />
        </div>
      </Link>
      <button className="logout-button" onClick={logout}>Log Out</button>
      <Link to="/createrecipe" id="create-recipe-link">Create Recipe</Link>
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
