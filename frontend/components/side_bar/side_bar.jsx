import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'

class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="sidebar">
        <Link to="/" className="header-link">
          <h1 id="yummaly-title">Yummaly</h1>
        </Link>
        <div className="sidebar-links">
          <Link to="/signup" className="link">Sign Up</Link>
          <br/>
          <Link to="/login" className="link">Log In</Link>
          <br/>
          <button onClick={this.props.processForm} value="Log Out">Log Out</button>
        </div>
      </div>
    )
  }
}

export default SideBar;
