import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import UserSplash from './user_splash';
import receiveCurrentUser from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    likes: state.entities.likes
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUser: user => dispatch(receiveCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSplash);
