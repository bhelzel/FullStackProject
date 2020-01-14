import { connect } from 'react-redux';
import React from 'react';
import { fetchAllRecipes, fetchRecipe } from '../../actions/recipe_actions';
import RecipesIndex from './recipes_index';

const mapStateToProps = state => ({
  recipes: state.entities.recipes
})

const mapDispatchToProps = dispatch => ({
  fetchAllRecipes: () => dispatch(fetchAllRecipes())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipesIndex);
