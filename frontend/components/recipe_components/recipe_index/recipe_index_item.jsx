import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeIndexItem = ({ recipe, currentUser }) => {

    return(
      <div className="recipe-container">
        <div className="img-div">
          <img
            src={recipe.photoUrl}
            className="recipe-photo"
          />
        </div>
        <br/>
        <div className="recipe-title-button">
            <Link to={`/recipes/${recipe.id}`} className="show-link" ><h5 className="recipe-name">{recipe.name}</h5></Link>
        </div>
      </div>
    )

}
