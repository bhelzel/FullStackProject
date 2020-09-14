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
          {/* <div className="pasta-img-container"></div>
          <div className="index-search-container"></div>
          <div className="pizza-img-container"></div>  */}
        </div>
        <div className="recipes">
          <div className="recipes-index-title">
            <p className="recipes-index-text">Good home cooking for family and friends</p>
            <p className="divider">______________________</p>
          </div>
          <RecipesIndex />
        </div>
      </div>
    )
  }
}


export default IndexSplash;
