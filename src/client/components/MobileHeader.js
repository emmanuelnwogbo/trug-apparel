import React, { Component } from 'react';

import Search from './Search';

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={'mobileheader'}>
        <div className={'mobileheader__name'}><p>Trugapparels</p></div>
        <div className={'mobileheader__menu'}></div>
        <Search />
      </div>
    )
  }
}

export default MobileHeader;