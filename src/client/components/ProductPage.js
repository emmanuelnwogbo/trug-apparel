import React, { Component } from 'react';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      perspectives: ['./imgs/unsplash5.jpg', './imgs/unsplash16.jpg', './imgs/unsplash11.jpg', './imgs/unsplash7.jpg'],
      perspective: './imgs/unsplash5.jpg',
      sizes: [
        'XL',
        'L',
        'M',
        'S'
      ],
      size: null
    }
    this.renderPerspectives = this.renderPerspectives.bind(this);
    this.changePerspective = this.changePerspective.bind(this);
    this.renderSizes = this.renderSizes.bind(this);
    this.selectSize = this.selectSize.bind(this);
  }

  selectSize(size) {
    this.setState({ size })
  }

  renderSizes() {
    return this.state.sizes.map(size => {
      if (this.state.size === size) {
        return (
          <span className={'productpage__top__details__sizes--cards-selected'} key={size} onClick={() => this.selectSize(size)}>{size}</span>
        )
      }

      return (
        <span className={'productpage__top__details__sizes--cards-unselected'} key={size} onClick={() => this.selectSize(size)}>{size}</span>
      )
    })
  }

  changePerspective(src) {
    this.setState({ perspective: src })
  }

  renderPerspectives() {
    return this.state.perspectives.map(perspective => {
      if (this.state.perspective === perspective) {
        return (
          <figure key={perspective} onClick={() => this.changePerspective(perspective)} className={'productpage__top__photos--current'}>
            <img src={perspective}/>
          </figure> 
        )
      }

      return (
        <figure key={perspective} onClick={() => this.changePerspective(perspective)} className={'productpage__top__photos--notcurrent'}>
          <img src={perspective}/>
        </figure>        
      )
    })
  }

  render() {
    return (
      <div className={'productpage'}>
        <div className={'productpage__top'}>
          <div className={'productpage__top__photos'}>
            {this.renderPerspectives()}
          </div>
          <div className={'productpage__top__display'}>
            <figure>
              <img src={this.state.perspective}/>
            </figure>
          </div>
          <div className={'productpage__top__details'}>
            <h2>ASOS DESIGN x glaad& unisex shirt co-ord in unity print</h2>
            <div className={'productpage__top__details--price'}><p>£30.00</p></div>
            <div className={'productpage__top__details__sizes'}>
              <div className={'productpage__top__details__sizes--choose'}><p>Choose from Available Sizes:</p></div>
              <div className={'productpage__top__details__sizes--cards'}>
                {this.renderSizes()}
              </div>
            </div>

            <div className={'productpage__top__btnparent'}>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage;