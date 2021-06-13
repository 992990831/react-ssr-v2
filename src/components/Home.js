import React from 'react';

const Home = () => { 
  const handleClick = ()=>{
    alert('hi');
  }

  return <span onClick={handleClick}>
        Hello, world!
      </span> 
};

export default(Home);