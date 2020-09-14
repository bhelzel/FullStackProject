import React from 'react';
import { Link, Redirect }from 'react-router-dom';
import { useHistory} from 'react-router';

class RecipeShow extends React.Component {

  constructor(props) {
    super(props);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.recipeId);
  }

  deleteRecipe() {
    this.props.deleteRecipe(this.props.recipe.id);
    // return <Redirect to="/" />
  }

  render() {
    if(this.props.recipe === undefined || this.props.recipe.ingredients === undefined) {
      return null;
    }
    return (
      <div className="recipe-show">
        <div className="recipe">
          <div className="row-1">
            <h2 className="rec-show-name">{this.props.recipe.name}</h2>
          </div>
          <div className="row-2">
            <img src={this.props.recipe.photoUrl} className="recipe-photo-show"/>
            <div className="ingredients-div">
              <h4 className="ing-title">Ingredients:</h4>
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
          </div>
          <div className="directions-div">
            <h4 className="dir-title">Directions:</h4>
            <div className="ol-div">
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
          </div>
          <div className="row-4">
            <div className="rec-info">
              <p>Region: {this.props.recipe.region}</p>
              <p>Recipe Type: {this.props.recipe.recipe_type}</p>
              <p>Vegan: {this.props.recipe.vegan ? "Yes!" : "No"}</p>
              <p>Vegetarian: {this.props.recipe.vegetarian ? "Yes!" : "No"}</p>
              <p>Pescetarian: {this.props.recipe.pescetarian ? "Yes!" : "No"}</p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => this.deleteRecipe()}>Delete Recipe</button>  
        </div>
      </div>
    )
  }
}

export default RecipeShow