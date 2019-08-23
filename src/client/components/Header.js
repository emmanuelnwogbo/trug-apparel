import React from 'react';

const Header = ({ categories, currentCategory, changeCategory }) => {

  const renderCategories = () => {
    return categories ? categories.map(category => {
      if (category !== currentCategory) {
        return (
          <span style={{
            opacity: '.5'
          }} className={'header__categories--category'} onClick={() => changeCategory(category)}>
            {category}
          </span>
        )
      }

      return (
        <span className={'header__categories--category'}>
          {category}
        </span>
      )
    }) : ""
  }

  return (
    <div className={'header'}>
      <div className={'header__search'}>
        <input placeholder={'Search'} className={'header__search--input'}/>
      </div>
      <div className={'header__categories'}>
        {renderCategories()}
      </div>
      <div className={'header__cart'}>
        <svg>
          <use xlinkHref={"./imgs/sprite.svg#icon-cart"}/>
        </svg>
      </div>
    </div>
  )
}

export default Header;