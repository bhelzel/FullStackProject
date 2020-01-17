import React from 'react';

class RecipeShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId)
  }

  render() {
    if(this.props.recipe === undefined || this.props.recipe.ingredients === undefined) {
      return null;
    }
    return (
      <div className="recipe-show">
        <div className="recipe">
          <h2>{this.props.recipe.name}</h2>
          <img src={this.props.recipe.photoUrl} className="recipe-photo"/>
          <div className="ingredients-div">
            <h4>Ingredients:</h4>
            <ul>
              {
                this.props.recipe.ingredients.map((ingredient, i) => {
                  return(
                    <li className="ingredient" key={i} >{ingredient}</li>
                  )
                })
              }
            </ul>
          </div>
          <div className="directions-div">
            <h4>Directions:</h4>
            <ol>
              {
                this.props.recipe.directions.map((direction, i) => {
                  return(
                    <li className="direction" key={i}>{direction}</li>
                  )
                })
              }
            </ol>
          </div>
          <div className="rec-info">
            <h4>Region: {this.props.recipe.region}</h4>
            <h4>Recipe Type: {this.props.recipe.recipe_type}</h4>
            <h5>Vegan: {this.props.recipe.vegan ? "Yes!" : "No"}</h5>
            <h5>Vegetarian: {this.props.recipe.vegetarian ? "Yes!" : "No"}</h5>
            <h5>Pescetarian: {this.props.recipe.pescetarian ? "Yes!" : "No"}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeShow;
