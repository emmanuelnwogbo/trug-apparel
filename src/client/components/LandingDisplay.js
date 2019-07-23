import React, { Component } from 'react';

import ShirtsHoodiesCard from './ShirtsHoodiesCard';
import NewArrivalCard from './NewArrivalCard';
import DisplayCard from './DisplayCard';

class LandingDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //this is just for production, the arrivals will be gotten from 
      //the backend database
      devNewArrivals: ['./imgs/shirt1.jpg', './imgs/shirt2.jpg','./imgs/shirt4.jpg'],
      devShirtsAndHoodies: ['./imgs/shirt1.jpg', './imgs/shirt2.jpg', './imgs/shirt3.jpg', './imgs/shirt4.jpg'],

    }
    this.renderNewArrivals = this.renderNewArrivals.bind(this);
    this.devShirtsAndHoodies = this.devShirtsAndHoodies.bind(this);
  }

  devShirtsAndHoodies () {
    return this.state.devShirtsAndHoodies.map(arrival => {
      return (
        <ShirtsHoodiesCard key={arrival} arrival={arrival}/>
      )
    })    
  }

  renderNewArrivals () {
    return this.state.devNewArrivals.map(arrival => {
      return (
        <NewArrivalCard key={arrival} arrival={arrival}/>
      )
    })
  }
  
  render() {
    return (
      <div className={'landingdisplay'}>
        <div className={'landingdisplay__section'}>
          <h1>New Arrivals</h1>
          <div className={'landingdisplay__section__content'}>{this.renderNewArrivals()}</div>
          <div className={'landingdisplay__section__content--btns'}><span>View More</span></div>
        </div>
        <div className={'landingdisplay__section'}>
          <h1>Recommendations for You</h1>
          <div className={'landingdisplay__section__content'}>{this.devShirtsAndHoodies()}</div>
          <div className={'landingdisplay__section__content--btns'}><span>View More</span></div>
        </div>
      </div>
    )
  }
}

export default LandingDisplay;