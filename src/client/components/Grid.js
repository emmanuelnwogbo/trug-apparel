import React from 'react';

const Grid = ({ products }) => {
  console.log(products)
  return (
    <div className={'grid'}>
      <div className={'grid__container'}>
        <div className={'grid__container__content'}>
        {
          products ? products.map(product => {
            //add logic to display product based on category and filter here
            return (
              <div className={'grid__product'}>
                <figure className={'grid__product__figure'}>
                  <img src={product.images[0]}/>
                </figure>
                <div className={'grid__product__details'}>
                  <div className={'grid__product__details--name'}><p>{product.name}</p></div>
                  <div className={'grid__product__details--price'}><p>{product.price}</p></div>
                </div>
              </div>
            )
          }) : <div></div>
        }        
        </div>
      </div>
    </div>
  )
}

export default Grid;