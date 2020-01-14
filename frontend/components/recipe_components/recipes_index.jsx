import React from 'react';

class RecipesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllRecipes()
  }

  render() {
    return (
      <div className="recipes-index">
        {
          Object.values(this.props.recipes).map(recipe => (
            <div className="recipe-container" key={recipe.id}>
              <h3>{recipe.name}</h3>
            </div>))
        }
      </div>
    )
  }
}

export default RecipesIndex;
