import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';


const ButtonModal = ({ closeModal, openModal, demoLogin, demoUser }) => {

  const sessionLinks = () => {

    return(
      <nav className="login-signup">
        <div className="login-signup-text-div">
          <h1 className="yum-logo">Yummaly!</h1>
          <h2 className="button-modal-text">Like cooking?</h2>
          <h4>We've got you covered!</h4>
        </div>
        <br/>
        <button onClick={() => openModal('login')} className="login-button-modal">Login</button>
        <br/>
        <button onClick={() => openModal('signup')} className="signup-button-modal">Signup</button>
        <br />
        <button
          onClick={ () => {demoLogin(demoUser); closeModal()} }
          className="demo-button-modal">Demo User
        </button>
      </nav>
    )};

  return(
    <div className="button-container">
      {sessionLinks()}
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
  demoUser: {
    email: 'DemoUser',
    password: 'asdfasdf'
  }
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  demoLogin: user => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonModal);
