import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import * as APIUtils from './util/session_api_util';
import Root from './components/root'
document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.signup = APIUtils.signup;
  window.login = APIUtils.login;
  window.logout = APIUtils.logout;
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
