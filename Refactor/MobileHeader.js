import React, { Component } from 'react';

import Search from './Search';

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          type: 'sprite',
          sprite: "./imgs/sprite.svg#icon-cart"
        }
      ]
    }
    this.renderCart = this.renderCart.bind(this);
  }

  renderCart() {
    return this.state.menuItems.map(item => {
      if (item.type) {
        return (
          <div key={item} className={'mobileheader__menu--cart'}>
            <span>{'0'}</span>
            <svg>
              <use xlinkHref={item.sprite}/>
            </svg>
          </div>
        )
      }
    });
  }

  render() {
    return (
      <div className={'mobileheader'}>
        <div className={'mobileheader__name'}>
          <p>Trugapparels</p>
          {this.renderCart()}
        </div>
        <Search />
      </div>
    )
  }
}

export default MobileHeader;