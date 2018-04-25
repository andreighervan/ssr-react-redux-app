import React from 'react';

const Home=()=>{
  return <div>
    <h3>I'm home component</h3>
    <button onClick={()=>console.log('hi')}>Press me!</button>
  </div>
};

export default Home;