import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = ({ filters }) => {

  const renderFilters = () => {
    return filters ? filters.map(filter => {
      return (
        <span className={'sidenav__filter'}>{filter}</span>
      )
    }) : ""
  }

  return (
    <div className={'sidenav'}>
      <div className={'sidenav__name'}><p>Trugapparel</p></div>
      <div className={'sidenav__filters'}>
        <h1 className={'sidenav__filters--h1'}>Filters</h1>
        <div className={'sidenav__filters--menu'}>
          {renderFilters()}
        </div>
      </div>
    </div>
  )
}

export default Sidenav;