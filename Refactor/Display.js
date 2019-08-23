import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: ['./imgs/unsplash5.jpg', './imgs/unsplash16.jpg', './imgs/unsplash11.jpg', './imgs/unsplash7.jpg']
    }
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    return this.state.cards.map(card => {
      return (
        <div className={'display__card'} key={card}>
          <figure>
            <img src={card}/>
          </figure>
          <div className={'display__card--details'}>
            <div className={'display__card--details-name'}>Premier Cropped Skinny Jean</div>
            <div className={'display__card--details-price'}>$400.00</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={'display'}>
        <h2 className={'display--h2'}>Recommended for you</h2>
        <div className={'display__content'}>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default Display;