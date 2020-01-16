import React from 'react';
import { Link } from 'react-router-dom';

export const RecipeIndexItem = ({ recipe, likeRecipe, unLikeRecipe }) => {
  return(
    <div className="recipe-container">
      <img
        src={recipe.photoUrl}
        className="recipe-photo"
      />
      <div className="recipe-title-button">
          <Link to={`/${recipe.id}`}><h3>{recipe.name}</h3></Link>
          <button
            onClick={ () => likeRecipe(recipe.id) }
            className="like-button">Like</button>
          <button
            onClick={ () =>  unLikeRecipe(like.id) }
            className="like-button">Unlike</button>
      </div>
    </div>
  )
}
