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

        </div>
        <div className="user-yums">
          <h2>Favorite Recipes:</h2>
          <p>Go to your feed and click the "Like" button to save recipes</p>
        </div>
      </div>
    )
  }
}

export default UserSplash;
