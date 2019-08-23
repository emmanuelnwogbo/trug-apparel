import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'search'}>
        <input placeholder={'search here'}/>
      </div>
    )
  }
}

export default Search;