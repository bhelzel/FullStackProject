import React from 'react'
import ReactDOM from 'readt-dom'

import configureStore from './store/configureStore'

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
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root);
});
