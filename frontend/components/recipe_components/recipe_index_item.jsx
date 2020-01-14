import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeIndexItem = props => {
  return(
    <div className="recipe-container">
      <Link to={`/${props.recipe.id}`}><h3>{props.recipe.name}</h3></Link>
    </div>
  )
}
