import { connect } from 'react-redux';
import React from 'react';
import RecipeShow from './recipe_show';
import { fetchRecipe } from '../../actions/recipe_actions';

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId]
})

const mapDispatchToProps = dispatch => ({
  fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow)
