import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Header from './Header';
import Sidenav from './Sidenav';
import Grid from './Grid';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: false,
      filters: false,
      products: false,
      category: 'men',
      filter: null
    }
  }

  changeCategory = (category) => {
    this.setState({ category })
  }

  componentDidMount() {
    import('../../db').then(db => {
      //console.log(db);
      this.setState({
        categories: db.default.categories,
        filters: db.default.filters,
        products: db.default.products
      })
    })
  }

  render() {
    return (
      <div className={'home'}>
        <Header 
        categories={this.state.categories} 
        currentCategory={this.state.category}
        changeCategory={this.changeCategory}/>
        <Sidenav filters={this.state.filters}/>
        <Grid products={this.state.products}/>
      </div>
    )
  }
}

export default Home;