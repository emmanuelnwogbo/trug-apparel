import React, { Component } from 'react';

class ProductsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        './imgs/unsplash5.jpg', 
        './imgs/unsplash16.jpg', 
        './imgs/unsplash11.jpg', 
        './imgs/unsplash7.jpg',
        './imgs/unsplash5.jpg', 
        './imgs/unsplash16.jpg', 
        './imgs/unsplash11.jpg', 
        './imgs/unsplash7.jpg',
        './imgs/unsplash5.jpg', 
        './imgs/unsplash16.jpg', 
        './imgs/unsplash11.jpg', 
        './imgs/unsplash7.jpg',
        './imgs/unsplash5.jpg', 
        './imgs/unsplash16.jpg', 
        './imgs/unsplash11.jpg', 
        './imgs/unsplash7.jpg'
      ]
    }
    this.renderCards = this.renderCards.bind(this);
  }

  renderCards() {
    return this.state.cards.map(card => {
      return (
        <div className={'productgrid__card'} key={card}>
          <figure>
            <img src={card}/>
          </figure>
          <div className={'productgrid__card--details'}>
            <div className={'productgrid__card--details-name'}>Premier Cropped Skinny Jean</div>
            <div className={'productgrid__card--details-price'}>$400.00</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className={'productgrid'}>
        <div className={'productgrid__header'}>
          <input />
          <span>Start Shopping</span>
        </div>
        <div className={'productgrid__sort'}></div>
        <div className={'productgrid__section productgrid__container'}>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default ProductsGrid;