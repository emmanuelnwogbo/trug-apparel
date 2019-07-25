import React, { Component } from 'react';

import Header from './Header';
import Jumbotron from './Jumbotron';
import MobileMast from './MobileMast';
import Announcements from './Announcements';
import SideNav from './SideNav';
import LandingDisplay from './LandingDisplay';
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
        <SideNav />
        <Jumbotron />
        <MobileMast />
        <Announcements />
        <LandingDisplay />
        <Footer />
      </div>
    )
  }
}

export default Home;