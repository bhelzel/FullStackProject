import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import SideBar from './side_bar';

// const mapStateToProps = state => {
//   return {
//     currentUser: this.state.entities.users;
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    processForm: () => dispatch(logout())
  }
};

export default connect(null, mapDispatchToProps)(SideBar);
