import React from 'react';

const images = [
  `https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594269/girl-with-hair_kaeg66.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/q_59/v1559594210/black-boy_ydtwkv.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/q_53/v1559594251/camera-1_hqcuwp.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/v1559594226/color-hands_hlfpvy.jpg`,
  `https://res.cloudinary.com/dxlhzerlq/image/upload/v1559594288/clown_ouhykp.jpg`
]

const topPicks = [
  `https://as1.ftcdn.net/jpg/02/23/08/12/500_F_223081216_VleXWWTzfbuaEKQa2Rw9s8UfqPJND5BY.jpg`,
  `https://st2.depositphotos.com/3591429/6306/i/950/depositphotos_63060859-stock-photo-african-teenage-boy.jpg`,
  `https://image.freepik.com/free-photo/portrait-pretty-african-american-boy-black-young-teen-man-white-background_8119-2169.jpg`,
  "./imgs/shirt6.jpg",
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