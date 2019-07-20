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
  `data:image/jpeg;base64,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`,
  `https://media.istockphoto.com/photos/young-male-portrait-picture-id183816132`
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