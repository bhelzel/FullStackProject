import React from 'react';

class IndexSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.currentUser ?
            "test" :
            "test1"
        }
      </div>
    )
  }
}


export default IndexSplash;
