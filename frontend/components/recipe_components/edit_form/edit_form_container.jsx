import { editRecipe } from "../../../util/recipe_api_util";
import { fetchRecipe } from "../../../util/recipe_api_util";
import { connect } from "react-redux";
import EditForm from './edit_form';

const mapStateToProps = (state, ownProps) => ({
    recipe: state.entities.recipes[ownProps.match.params.recipeId]
});

const mapDispatchToProps = dispatch => ({
    fetchRecipe: recipeId => dispatch(fetchRecipe(recipeId)),
    editRecipe: recipe => dispatch(editRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);