import React from 'react';

class IndexSplash extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.currentUser.email}</div>
    )
  }
}


export default IndexSplash;
