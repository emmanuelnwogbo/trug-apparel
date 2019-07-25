import React from 'react';

const images = [
  "./imgs/unsplash1.jpg",
  "./imgs/unsplash6.jpg",
  "./imgs/unsplash11.jpg",
  "./imgs/unsplash12.jpg",
  "./imgs/unsplash13.jpg",
  "./imgs/unsplash14.jpg",
  "./imgs/unsplash15.jpg"
]

const topPicks = [
  "./imgs/shirt8.jpg",
  "./imgs/shirt6.jpg",
  "./imgs/shirt5.jpg",
  "./imgs/shirt4.jpg",
  "./imgs/shirt7.jpg",
]

const Jumbotron = () => {

  const returnImages = () => {
    return images.map(image => {
      return (
        <figure key={image} className={'jumbotron__fig'}>
          <img src={image} />
        </figure>
      )
    });
  }

  const returnTopPicks = () => {
    let key = 0;
    return topPicks.map(pick => {
      key+=1;
      return (
        <figure className={'jumbotron__toppicks--pick'} key={key}>
          <img src={pick}/>
          <div className={'jumbotron__toppicks--text'}>
            <p>Category</p>
          </div>
        </figure>
      )
    })
  }

  return (
    <div className={'jumbotron'}>
      {returnImages()}   
      <div className={'jumbotron__toppicks'}>
        <h1>Find a style for every mood.</h1>
        {returnTopPicks()}
      </div>
      <div className={'jumbotron__bottom'}>
        <input placeholder={'Search for items, brands and inspiration'} />
        <span>Start Shopping</span>
      </div>
    </div>
  )
}

export default Jumbotron;