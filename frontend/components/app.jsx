import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SideBarContainer from './side_bar/side_bar_container';
import UserSplash from './splash_pages/user_splash/user_splash_container';
import Modal from './modals/modal';
import IndexSplash from './splash_pages/index_splash/index_splash_container';

const App = () => (
  <div className="wrapper">
    <SideBarContainer />
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/profile" component={UserSplash} />
      <Route exact path="/" component={IndexSplash} />
    </Switch>
  </div>
);

export default App;
