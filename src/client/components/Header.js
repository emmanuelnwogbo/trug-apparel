import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileIcons: [
        "./imgs/sprite.svg#icon-user1",
        "./imgs/sprite.svg#icon-cart"
      ],
      menuLabels: [
        'Shirts',
        'Accessories',
        'Trousers',
        'Hoods',
        'Prints'
      ]
    };
    this.renderProfileIcons = this.renderProfileIcons.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  renderProfileIcons () {
    return this.state.profileIcons.map(icon => {
      return (
        <div className={'header__top--user-item'} key={icon}>
          <span>
            <svg>
              <use xlinkHref={icon}/>
            </svg>
          </span>
        </div>
      )
    })
  }

  renderMenuItems () {
    return this.state.menuLabels.map(label => {
      return <span key={label}><p>{label}</p></span>
    })
  }
  
  render() {
    return (
      <div className={'header'}>
        <div className={'header__top'}>
          <div className={'header__top--name'}>
            <p>Trugapparel</p>
          </div>
          <div className={'header__top--user'}>
            {this.renderProfileIcons()}
          </div>
        </div>
        <div className={'header__menu'}>
          {this.renderMenuItems()}
        </div>
      </div>
    )
  }
}

export default Header;