import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import SideBar from './side_bar';

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(logout())
  }
};

export default connect(mapDispatchToProps)(SideBar);
