import * as RecipeAPIUtil from '../util/recipe_api_util';

export const RECEIVE_ALL_RECIPES = 'RECEIVE_ALL_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE'

export const receiveAllRecipes = recipes => ({
  type: RECEIVE_ALL_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
})

export const fetchAllRecipes = () => dispatch => (
  RecipeAPIUtil.fetchAllRecipes().then(recipes => (
    dispatch(receiveAllRecipes(recipes))
  ))
)

export const fetchRecipe = () => dispatch => (
  Recipe.APIUtil.fetchRecipe().then(recipe => (
    dispatch(receiveRecipe(recipe))
  ))
)