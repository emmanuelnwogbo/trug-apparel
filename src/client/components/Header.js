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
      ],
      dropDownLabels: [
        'Sign In/Join',
        'My Account',
        'My Orders'
      ]
    };
    this.renderProfileIcons = this.renderProfileIcons.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.renderdropDownLabels = this.renderdropDownLabels.bind(this);
  }

  renderProfileIcons () {
    return this.state.profileIcons.map(icon => {
      if (icon === "./imgs/sprite.svg#icon-user1") {
        return (
          <div className={'header__top--user-item'} id={'profile-head'} key={icon}>
            <span>
              <svg>
                <use xlinkHref={icon}/>
              </svg>
            </span>
          </div>
        );
      }

      return (
        <div className={'header__top--user-item'} key={icon}>
          <span>
            <svg>
              <use xlinkHref={icon}/>
            </svg>
          </span>
        </div>
      );
    })
  }

  renderMenuItems () {
    return this.state.menuLabels.map(label => {
      return <span key={label}><p>{label}</p></span>
    })
  }

  renderdropDownLabels () {
    return this.state.dropDownLabels.map(label => {
      if (label === 'Sign In/Join') {
        return (
          <div className={'header__dropdown--item header__dropdown--item-signinjoin'} key={label}>
            <span id={'sign-in'}><p>Sign In</p></span>
            <span id={'join'}><p>Join</p></span>
          </div>
        )
      }

      return (
        <div className={'header__dropdown--item header__dropdown--item-notsigninjoin'} key={label}>
          <p>{label}</p>
        </div>
      )
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
            <div className={'header__dropdown'}>
              {this.renderdropDownLabels()}
            </div>
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