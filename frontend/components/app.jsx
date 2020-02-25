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
import RecipeShowContainer from './recipe_components/recipe_show_container';
import CreateRecipeContainer from './recipe_components/create_form_container';
import TestForm from './recipe_components/test_form';

const App = () => (
  <div className="wrapper">
    <SideBarContainer />
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/profile" component={UserSplash} />
      <Route exact path="/" component={IndexSplash} />
      <Route exact path="/recipes/:recipeId" component={RecipeShowContainer} />
      <Route exact path="/createrecipe" component={CreateRecipeContainer} />
      {/* <AuthRoute exact path="edit-recipe" component={EditRecipeContainer} /> */}
    </Switch>
  </div>
);

export default App;
