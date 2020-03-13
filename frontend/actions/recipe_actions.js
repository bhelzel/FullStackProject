import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
});

export const removeRecipe = recipeId => ({
  type: REMOVE_RECIPE,
  recipeId
});

export const fetchAllRecipes = () => dispatch => (
  RecipeAPIUtil.fetchAllRecipes().then(recipes => (
    dispatch(receiveAllRecipes(recipes))
  ))
);

export const fetchRecipe = recipeId => dispatch => (
  RecipeAPIUtil.fetchRecipe(recipeId).then(recipe => (
    dispatch(receiveRecipe(recipe))
  ))
);

export const postRecipe = (recipe, photo) => dispatch => {
  return RecipeAPIUtil.postRecipe(recipe).then(recipe => (
    dispatch(receiveRecipe(recipe))
  ));
};

export const editRecipe = recipeId => dispatch => (
  RecipeAPIUtil.editRecipe(recipeId).then(recipeId => (
    dispatch(receiveRecipe(recipeId))
  ))
);

export const deleteRecipe = recipeId => dispatch => (
  RecipeAPIUtil.deleteRecipe(recipeId).then(recipeId => (
    dispatch(removeRecipe(recipeId))
  ))
);

export const likeRecipe = id => dispatch => (
  RecipeAPIUtil.postLikeToRecipe(id)
    .then(recipe => dispatch(receiveRecipe(recipe)))
);

export const unLikeRecipe = id => dispatch => (
  RecipeAPIUtil.deleteLikeFromRecipe(id)
    .then(recipe => dispatch(receiveRecipe(recipe)))
);
