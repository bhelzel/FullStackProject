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
          <div className="filter-option">Pasta</div>
          <div className="filter-option">Vegetarian</div>
          <div className="filter-option">Appetizers</div>
          <div className="filter-option">Italian</div>
          <div className="filter-option">Spicy</div>
          <div className="filter-option">Beef</div>
          <div className="filter-option">Asian</div>
          <div className="filter-option">Healthy</div>
          <div className="filter-option">Seafood</div>
          <div className="filter-option">Salads</div>
          <div className="filter-option">Mexican</div>
          <div className="filter-option">Savory</div>
          <div className="filter-option">Dessert</div>
          <div className="filter-option">Middle Eastern</div>
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
