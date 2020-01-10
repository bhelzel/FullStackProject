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
import Yummaly from './splash_pages/yummaly_container';
import SideBarContainer from './side_bar/side_bar_container';



const App = () => (
  <div className="wrapper">
    <SideBarContainer />
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
