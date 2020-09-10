import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeIndexItem } from './recipe_index_item';

class RecipesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  render() {
    return (
      <div className="recipes-index">
        {
          Object.values(this.props.recipes).map(recipe => (
            <RecipeIndexItem
              recipe={recipe}
              currentUser={this.props.currentUser}
              key={recipe.id}
            />
        ))}
      </div>
    )
    }
}

export default RecipesIndex;
