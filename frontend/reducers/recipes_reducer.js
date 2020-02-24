import { RECEIVE_ALL_RECIPES, RECEIVE_RECIPE, REMOVE_RECIPE } from '../actions/recipe_actions';

const recipesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RECIPES:
      return Object.assign({}, action.recipes);
    case RECEIVE_RECIPE:
      return Object.assign({}, state, { [action.recipe.id]: action.recipe });
    case REMOVE_RECIPE:
      return Object.assign({}, state, { [action.recipeId]: null });
    default:
      return state;
  }
};

export default recipesReducer;
