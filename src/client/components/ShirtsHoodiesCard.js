import React from 'react';

const ShirtsHoodiesCard = ({ arrival }) => {
  return (
    <div className={'shirtshoodiescard'}>
      <figure>
        <img src={arrival}/>
      </figure>
      <div className={'shirtshoodiescard__bio'}>
        <div className={'shirtshoodiescard__bio--text'}><p>ASOS DESIGN oversized sleeveless t-shirt with dark future logo</p></div>
        <div className={'shirtshoodiescard__bio--text'}><p>£22.00</p></div>
      </div>
    </div>
  )
}

export default ShirtsHoodiesCard;