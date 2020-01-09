import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import UserSplash from './user_splash';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

export default connect(mapStateToProps, null)(UserSplash);
