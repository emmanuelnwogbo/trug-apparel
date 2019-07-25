import React, { Component } from 'react';

class Announcements extends Component {
  constructor(props) {
    super(props)
    this.state = {
      promotions: [
        "./imgs/unsplash7.jpg",
        "./imgs/unsplash16.jpg",
        "./imgs/unsplash11.jpg",
        "./imgs/unsplash13.jpg"
      ],
      firstPromotionSlideContent: [
        "./imgs/unsplash15.jpg",
        "./imgs/unsplash2.jpg",
        "./imgs/unsplash3.jpg",
        "./imgs/unsplash4.jpg"
      ],
      currentFirstPromoPhoto: 0 
    }
    this.renderPromotions = this.renderPromotions.bind(this);
    this.renderFirstPromotionSlide = this.renderFirstPromotionSlide.bind(this);
  }

  renderFirstPromotionSlide () {
    return this.state.firstPromotionSlideContent.map(content => {
      if (this.state.firstPromotionSlideContent.indexOf(content) === this.state.currentFirstPromoPhoto) {
        return (
          <figure key={content} style={{zIndex: '10', display: 'block'}}>
            <img src={content}/>
            <div className={'announcements__slide__details'}>
              <h2>{'NEW DROP: NIKE AIR MAX 270 REACT'}</h2>
              <p>{'The hybrid style bringing the heat'}</p>
              <p>{'7th Sept 2019'}</p>
            </div>
          </figure>
        )
      }

      return (
        <figure key={content} style={{display: 'none'}}>
          <img src={content}/>
          <div className={'announcements__slide__details'}>
            <h2>{'NEW DROP: NIKE AIR MAX 270 REACT'}</h2>
            <p>{'The hybrid style bringing the heat'}</p>
            <p>{'7th Sept 2019'}</p>
          </div>
        </figure>
      )
    })
  }

  renderPromotions () {
    return this.state.promotions.map(promotion => {
      if (this.state.promotions.indexOf(promotion) === 0) {
        return (
          <div key={promotion} className={'announcements__fig'}>
            {this.renderFirstPromotionSlide()}
          </div>
        )
      }

      return (
        <figure className={'announcements__fig'} key={promotion}>
          <img src={promotion}/>
          <div className={'announcements__slide__details'}>
            <h2>{'NEW DROP: NIKE AIR MAX 270 REACT'}</h2>
            <p>{'The hybrid style bringing the heat'}</p>
            <p>{'7th Sept 2019'}</p>
          </div>          
        </figure>
      )
    })
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.currentFirstPromoPhoto >= this.state.firstPromotionSlideContent.length-1) {
        return this.setState({ currentFirstPromoPhoto: 0 })        
      }

      this.setState(prevState => {
        return {
          currentFirstPromoPhoto: prevState.currentFirstPromoPhoto+=1
        }
      })
    }, 1500)
  }
  
  render() {
    return (
      <div className={'announcements'}>
        {this.renderPromotions()}
      </div>
    )
  }
}

export default Announcements;