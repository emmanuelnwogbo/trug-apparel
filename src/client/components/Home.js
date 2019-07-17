import React from 'react';

const Home = () => {
  console.log('hello')
  return (
    <div>
      <div>I'm the home</div>
      <button onClick={() => console.log('hi there')}>Press Me!</button>
    </div>
  );
};
export default Home;