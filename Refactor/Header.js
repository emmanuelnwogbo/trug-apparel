import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Search from './Search';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        'Shirts',
        'Accessories',
        'Trousers',
        'Hoodies',
        'Prints',
        'Log in',
        {
          type: 'sprite',
          sprite: "./imgs/sprite.svg#icon-cart"
        }
      ]
    }
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  renderMenuItems() {
    return this.state.menuItems.map(item => {
      if (item.type) {
        return (
          <div key={item} className={'header__menu--cart'}>
            <span>{'0'}</span>
            <svg>
              <use xlinkHref={item.sprite}/>
            </svg>
          </div>
        )
      }

      if (item === 'Log in') {
        return (
          <span key={item} className={'header__menu--login'}>{item}</span>
        )
      }

      return (
        <span key={item} className={'header__menu--item'}><NavLink to={`/${item}`}>{item}</NavLink></span>
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