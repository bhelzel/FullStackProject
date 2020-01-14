import React from 'react';
import RecipesIndex from '../../recipe_components/recipes_index_container';

class IndexSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="show" id="index-show">
        <div className="splash-header">
          <div className="index-search-container">
            <input
              type="text"
              className="index-search"
              placeholder="Search All Recipes"
            />
          </div>
        </div>
        <div className="recipes">
          <h5 className="recipes-index-text">Classic Italian recipes from across the country, just for you:</h5>
          <RecipesIndex />
        </div>
      </div>
    )
  }
}


export default IndexSplash;
