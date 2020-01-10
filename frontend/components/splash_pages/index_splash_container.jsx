import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import IndexSplash from './index_splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
}

export default connect(mapStateToProps, null)(IndexSplash);
