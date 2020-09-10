import { connect } from 'react-redux';
import React from 'react';
import  RecipeShow  from './recipe_show';
import { fetchRecipe, deleteRecipe } from '../../../actions/recipe_actions';
import { receiveCurrentUser } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId]
});

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);
