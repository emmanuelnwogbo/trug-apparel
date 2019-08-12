import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      date: null,
      labels: [
        'About',
        'Privacy',
        'Terms',
        'Help'
      ],
      icons: [
        "./imgs/sprite.svg#icon-instagram",
        "./imgs/sprite.svg#icon-twitter",
        "./imgs/sprite.svg#icon-facebook1"
      ]
    }
    this.returnLabels = this.returnLabels.bind(this);
    this.returnIcons = this.returnIcons.bind(this);
  }

  returnLabels () {
    return this.state.labels.map(label => {
      return (
        <div className={'footer__label'} key={label}>
          <p>{label}</p>
        </div>
      )
    })
  }

  returnIcons () {
    return this.state.icons.map(icon => {
      return (
        <span key={icon}>
          <svg>
            <use xlinkHref={icon}/>
          </svg>
        </span>
      )
    })
  }

  componentDidMount() {
    //this.setState({ date: moment !== undefined ? moment(new Date()).format('YYYY') : '' })
  }

  render() {
    return (
      <div className={'footer'}>
        <div className={'footer__top'}>
          <div className={'footer__top__labels'}>{this.returnLabels()}</div>
          <div className={'footer__top--date'}>© {this.state.date} Trugapparel, Inc.</div>
        </div>
        <div className={'footer__bottom'}>
          <div className={'footer__bottom__socials'}>
            {this.returnIcons()}
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;