import React, { Component } from 'react';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: `translateX(-100%)`,
      menuLabels: [
        'Shirts',
        'Accessories',
        'Trousers',
        'Hoodies',
        'Prints',
        'Log in'
      ]
    };
    this.changeNavState = this.changeNavState.bind(this);
    this.returnBtn = this.returnBtn.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  returnBtn () {
    if (this.state.open === `translateX(0)`) {
      return (
        <div className={'sidenav__btn--close'} onClick={this.changeNavState}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )
    }

    return (
      <div className={'sidenav__btn--open'} onClick={this.changeNavState}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }

  changeNavState () {
    if (this.state.open === `translateX(0)`) {
      return this.setState({ open: `translateX(-100%)` });
    }

    this.setState({ open: `translateX(0)` });
  }

  renderMenu () {
    return this.state.menuLabels.map(label => {
      if (label === 'Log in') {
        return (
          <div className={' sidenav__menu--btn sidenav__menu--btn-login'} key={label}><p>{label}</p></div>
        )       
      }
      return (
        <div className={'sidenav__menu--btn'} key={label}><p>{label}</p></div>
      )
    })
  }

  render() {
    return (
      <div className={'sidenav'} style={{transform: this.state.open}}>
        {this.state.open === 'translateX(0)' ? <div className={'sidenav--overlay'} onClick={this.changeNavState}></div> : ''}
        {this.returnBtn()}
        <div className={'sidenav__menu'}>
          {this.renderMenu()}
        </div>
      </div>
    )
  }
}

export default SideNav;