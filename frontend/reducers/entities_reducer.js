import { combineReducers } from 'redux';
import users from './users_reducer';
import recipes from './recipes_reducer';
// import likes from './likes_reducer';

export default combineReducers({
  users,
  recipes
  // likes
});
