import React from 'react';
import { Link } from 'react-router-dom';
import { RecipeIndexItem } from './recipe_index_item';

class RecipesIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipes
    };
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

    let newRecipes;

    newRecipes = Object.values(this.props.recipes).filter(recipe => {
      return recipe !== null;
    });

    console.log(newRecipes);

    // this.props.recipes = newRecipes;

    this.setState({ recipes: newRecipes});
  }

  render() {
    console.log(this.state.recipes);
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
