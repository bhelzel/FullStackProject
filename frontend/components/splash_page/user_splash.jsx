import React from 'react';

class UserSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="user-show">
        <div className="show-header">
          <h1>{this.props.currentUser.email}</h1>
          <h4>Tell us about yourself!</h4>
        </div>
        <div className="user-yums">
          <h2>All Yums</h2>
          <p>Go to your feed and click the "Yum" icon to save recipes</p>
        </div>
        <div className="collections">
          <p>Add collections here!</p>
        </div>
      </div>
    )
  }
}

export default UserSplash;
