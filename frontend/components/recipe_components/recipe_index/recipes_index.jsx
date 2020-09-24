import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeIndexItem } from './recipe_index_item';

class RecipesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteRecipe.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllRecipes();
  }

  // componentDidUpdate(prevProps, nextProps) {
  //   if(prevProps.recipes.length != nextProps.recipes.length) {
  //     this.props.fetchAllRecipes();
  //   }
  // }

  handleDeleteRecipe() {
    newRecipes = this.props.recipes.filter(recipe => {
      return recipe !== null;
    });
    this.setState({ recipes: newRecipes});
  }

  render() {
    return (
      <div className="recipes-index">
        {
          Object.values(this.props.recipes).map(recipe => (
            recipe == null ? this.handleDeleteRecipe() : 
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
