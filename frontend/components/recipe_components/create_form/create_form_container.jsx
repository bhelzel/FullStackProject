import { connect } from 'react-redux';
import React from 'react';
import CreateForm from './create_form';
import { postRecipe } from '../../actions/recipe_actions';

const mapDispatchToProps = dispatch => ({
    postRecipe: recipe => dispatch(postRecipe(recipe))
});

export default connect(null, mapDispatchToProps)(CreateForm);