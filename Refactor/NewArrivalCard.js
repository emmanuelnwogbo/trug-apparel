import React from 'react';

const NewArrivalCard = ({ arrival }) => {
  return (
    <div className={'newarrivalcard'}>
      <figure>
        <img src={arrival}/>
      </figure>
      <div className={'newarrivalcard__bio'}>
        <div className={'newarrivalcard__bio--text'}><p>ASOS DESIGN oversized sleeveless t-shirt with dark future logo</p></div>
        <div className={'newarrivalcard__bio--text'}><p>£22.00</p></div>
      </div>
    </div>
  )
}

export default NewArrivalCard;