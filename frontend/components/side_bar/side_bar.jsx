import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-links">
          <Link to="/signup" className="link">Sign Up</Link>
          <br/>
          <Link to="/login" className="link">Log In</Link>
          <br/>
          <button onClick={this.processForm} value="Log Out">Log Out</button>
        </div>
      </div>
    )
  }
}

export default SideBar;
