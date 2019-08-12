import React, { Component } from 'react';

const ProductDetails = ({ details }) => {

  return (
    <div className={'productpage__bottom'}>
      {
        details.map(detail => {
          return (
            <div className={'productpage__bottom__detail'} key={detail}>
              <h2>{'BRAND'}</h2>
              <p>
                {
                  'ASOS and LIFE IS BEAUTIFUL have linked up to create a collection that celebrates connection, joy and creativity. Held in Downtown Las Vegas, LIFE IS BEAUTIFUL festival brings together music, art, comedy, ideas and fashion to inspire and empower an ever-growing community. Shop our edit for vests, shirts, accessories and more.'
                }
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

const SimilarDetails = ({ similarProducts }) => {

  return (
    <div className={'productpage__similar'}>
      <h2>You might also like</h2>
      <div className={'productpage__similar__content'}>
      {
        similarProducts.map(similarProduct => {
          return (
            <div className={'productpage__similar__card'} key={similarProduct}>
              <figure>
                <img src={similarProduct}/>
              </figure>   
              <div className={'productpage__similar__card--details'}>
                <div className={'productpage__similar__card--details-name'}>Premier Cropped Skinny Jean</div>
                <div className={'productpage__similar__card--details-price'}>$400.00</div>
              </div>                       
            </div>
          )
        })
      }      
      </div>
    </div>
  )
}

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
        <ProductDetails details={[1, 2, 3, 4]}/>
        <SimilarDetails similarProducts={['./imgs/unsplash5.jpg', './imgs/unsplash16.jpg', './imgs/unsplash11.jpg', './imgs/unsplash7.jpg']}/>
      </div>
    )
  }
}

export default ProductPage;