import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import {AuthRoute} from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Yummaly from './session_form/yummaly';
import SideBar from './side_bar/side_bar_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Yummaly</h1>
      </Link>
      <SideBar />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Yummaly} />
    </Switch>
  </div>
);

export default App;
