import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Yummaly from './yummaly';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    location: ownProps.location.pathname
  }
}

export default connect(mapStateToProps, null)(Yummaly);
