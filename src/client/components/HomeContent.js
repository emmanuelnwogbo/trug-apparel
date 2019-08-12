import React from 'react';

import Mast from './Mast';
import Announcements from './Announcements';
import Display from './Display';

const HomeContent = () => {
  return (
    <div>
      <Mast />
      <Announcements />
      <Display />    
    </div>
  )
}

export default HomeContent;