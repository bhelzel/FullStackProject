import { connect } from 'react-redux';
import React from 'react';
import { fetchAllRecipes, likeRecipe, unLikeRecipe } from '../../actions/recipe_actions';
import RecipesIndex from './recipes_index';

const mapStateToProps = state => ({
  recipes: state.entities.recipes,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchAllRecipes: () => dispatch(fetchAllRecipes()),
  likeRecipe: recipeId => dispatch(likeRecipe(recipeId)),
  unLikeRecipe: recipeId => dispatch(unLikeRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesIndex);
