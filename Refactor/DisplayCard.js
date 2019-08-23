import React from 'react';

const DisplayCard = ({ arrival }) => {
  return (
    <div className={'newarrivalcard'}>
      <figure>
        <img src={arrival}/>
      </figure>
    </div>
  )
}

export default DisplayCard;