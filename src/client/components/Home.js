import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import MobileHeader from './MobileHeader'
import HomeContent from './HomeContent';
import SideNav from './SideNav';

import ProductsGrid from './ProductsGrid';
import ProductPage from './ProductPage';
import Footer from './Footer';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div className={'home'}>
        <Header />
        <MobileHeader />
        <SideNav />
        <Route exact path="/" component={HomeContent} />
        <Route exact path="/search" component={ProductsGrid} />
        <Footer />
      </div>
    )
  }
}

export default Home;