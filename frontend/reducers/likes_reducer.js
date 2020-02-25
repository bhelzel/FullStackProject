import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_ALL_RECIPES} from '../actions/recipe_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.likes);
    // case RECEIVE_ALL_RECIPES:
    //   return Object.assign({}, state, action.payload.likes);
    default:
      return state;
  }
};

export default likesReducer;
