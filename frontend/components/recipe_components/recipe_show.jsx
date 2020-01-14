import React from 'react';

class RecipeShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId)
  }

  render() {
    if(this.props.recipe === undefined) {
      return null;
    }
    return (
      <div className="recipe-show">
        <div className="recipe">
          <h2>{this.props.recipe.name}</h2>
          <p>{this.props.recipe.ingredients}</p>
          <p>{this.props.recipe.directions}</p>
          <h4>Region: {this.props.recipe.region}</h4>
          <h4>Recipe Type: {this.props.recipe.recipe_type}</h4>
          <h5>Vegan: {this.props.recipe.vegan}</h5>
          <h5>Vegetarian: {this.props.recipe.vegetarian}</h5>
          <h5>Pescetarian: {this.props.recipe.pescetarian}</h5>
        </div>
      </div>
    )
  }
}

export default RecipeShow;

// const RecipeShow = props => (
//   <div className="recipe-show">
//     <div className="recipe">
//       <h2>{this.props.recipe.name}</h2>
//       <p>{this.props.recipe.ingredients}</p>
//       <p>{this.props.recipe.directions}</p>
//       <h4>Region: {this.props.recipe.region}</h4>
//       <h4>Recipe Type: {this.props.recipe.recipe_type}</h4>
//       <h5>Vegan: {this.props.recipe.vegan}</h5>
//       <h5>Vegetarian: {this.props.recipe.vegetarian}</h5>
//       <h5>Pescetarian: {this.props.recipe.pescetarian}</h5>
//     </div>
//   </div>
// );
