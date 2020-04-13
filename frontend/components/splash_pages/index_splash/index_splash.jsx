import React from 'react';
import RecipesIndex from '../../recipe_components/recipe_index/recipes_index_container';

class IndexSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="show" id="index-show">
        <div className="splash-header">
          <div className="pasta-img-container"></div>
          <div className="index-search-container"></div>
          <div className="pizza-img-container"></div> 
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
