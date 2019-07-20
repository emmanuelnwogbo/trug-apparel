import React, { Component } from 'react';

import Header from './Header';
import Jumbotron from './Jumbotron';
import MobileMast from './MobileMast';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
    return (
      <div className={'home'}>
        <Header />
        <Jumbotron />
        <MobileMast />
      </div>
    )
  }
}

export default Home;