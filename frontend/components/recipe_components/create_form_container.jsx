import { connect } from 'react-redux';
import React from 'react';
import CreateForm from './create_form';
import { createRecipe } from '../../actions/recipe_actions';

const mapDispatchToProps = recipe => dispatch => ({
    createRecipe: recipe => dispatch(createRecipe(recipe))
});

export default connect(null, mapDispatchToProps)(CreateForm);