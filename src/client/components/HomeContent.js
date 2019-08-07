import React from 'react';


import Jumbotron from './Jumbotron';
import MobileMast from './MobileMast';
import Announcements from './Announcements';
import Display from './Display';

const HomeContent = () => {
  return (
    <div>
      <Jumbotron />
      <MobileMast />
      <Announcements />
      <Display />    
    </div>
  )
}

export default HomeContent;