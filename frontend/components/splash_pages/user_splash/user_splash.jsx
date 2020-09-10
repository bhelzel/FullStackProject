import React from 'react';

class UserSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser);
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
      </div>
    )
  }
}

export default UserSplash;
