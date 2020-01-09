import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const ButtonModal = ({ openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <div className="login-signup-text-div">
        <h3 className="yum-logo">Yummaly!</h3>
        <h2 className="button-modal-text">Like cooking?</h2>
        <h4>We've got you covered!</h4>
      </div>
      <br/>
      <button onClick={() => openModal('login')} className="login-button-modal">Login</button>
      <br/>
      <button onClick={() => openModal('signup')} className="signup-button-modal">Signup</button>
    </nav>
  );

  return(
    <div className="button-container">
      {sessionLinks()}
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonModal);
