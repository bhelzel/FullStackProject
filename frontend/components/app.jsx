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
import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Yummaly from './splash_page/yummaly';
import SideBarContainer from './side_bar/side_bar_container';
import Modal from './modal/modal';
import UserSplashContainer from './splash_page/user_splash_container';

const App = () => (
  <div className="wrapper">
    <Modal />
    <header>
      <SideBarContainer />
    </header>
    <Yummaly />
    <Switch>
      <ProtectedRoute exact path="/profile" component={UserSplashContainer} />
      // <AuthRoute exact path="/login" component={LogInFormContainer} />
      // <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Yummaly} />
    </Switch>
  </div>
);

export default App;
