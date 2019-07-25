import React from 'react';

const topPicks = [
  "./imgs/shirt8.jpg",
  "./imgs/shirt6.jpg",
  "./imgs/shirt5.jpg",
  "./imgs/shirt4.jpg",
  "./imgs/shirt7.jpg",
]

const MobileMast = () => {

  const renderCarousolCards = () => {
    return topPicks.map(pick => {
      return (
        <div className={'mobilemast__words__carousol--card'} key={pick}>
          <figure>
            <img src={pick} />
          </figure>
          <div className={'mobilemast__words__carousol--card--text'}><p>Category</p></div>
        </div>
      )
    })
  }

  return (
    <div className={'mobilemast'}>
      <figure>
        <img src={'https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg'}/>
      </figure>
      <div className={'mobilemast__words'}>
        <h1>Find a style for every mood.</h1>
        <div className={'mobilemast__words__carousol'}>
          <div className={'mobilemast__words__carousol--body'}>{renderCarousolCards()}</div>
        </div>
      </div>
    </div>
  )
}

export default MobileMast;