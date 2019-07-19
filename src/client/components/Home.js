import React from 'react';

const Home = () => {
  return (
    <div>
      <div className={'test'}>I'm the home and this is fun</div>
      <button onClick={() => console.log('hi there')}>Press Me</button>
    </div>
  );
};
export default Home;