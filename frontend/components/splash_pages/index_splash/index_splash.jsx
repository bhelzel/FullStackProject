import React from 'react';
import {regionButtons} from './region_buttons';

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
        <div className="region-buttons">
          {regionButtons()}
        </div>
      </div>
    )
  }
}


export default IndexSplash;
