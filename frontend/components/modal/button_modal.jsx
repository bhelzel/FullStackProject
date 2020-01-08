import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const ButtonModal = ({ openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
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
