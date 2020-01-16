import React from 'react';
import UserLike from './user_like'

class UserSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="show" id="user-show">
        <div className="user-show-header">
          <div className="user-icon">
            <img src="https://img.icons8.com/clouds/100/000000/italy.png" />
          </div>
          <div className="user-info-header">
            <span className="user-info-header-email">{this.props.currentUser.email}</span>
            <br/>
            <span className="user-info-header-greeting">Tell us about yourself!</span>
          </div>
        </div>
        <div className="user-search-container">
          <input
            type="text"
            className="user-search"
            placeholder="Search My Yums"
          />
        </div>
        <div className="user-yums">
          <h2>All Yums</h2>
          <p>Go to your feed and click the "Yum" icon to save recipes</p>
        </div>
        <div className="collections">
          <h2>Add collections here!</h2>
        </div>
      </div>
    )
  }
}

export default UserSplash;
