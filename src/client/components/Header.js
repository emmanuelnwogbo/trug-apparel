import React, { Component } from 'react';

import Search from './Search';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        'Shirts',
        'Accessories',
        'Trousers',
        'Hoods',
        'Prints'
      ]
    }
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  renderMenuItems() {
    return this.state.menuItems.map(item => {
      return (
        <span key={item}>{item}</span>
      )
    })
  }

  render() {
    return (
      <div className={'header'}>
        <div className={'header__name'}><p>Trugapparels</p></div>
        <div className={'header__menu'}>
          {this.renderMenuItems()}
        </div>
        <Search />
      </div>
    )
  }
}

export default Header;