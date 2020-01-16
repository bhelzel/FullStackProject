import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import UserSplash from './user_splash';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    likes: state.entities.likes
  }
}

export default connect(mapStateToProps, null)(UserSplash);
