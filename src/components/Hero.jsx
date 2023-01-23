import React from 'react';
import logo from '../datalinc.png'


function Hero() {
  return ( <div className='App-hero , container'>
    <div className='column-1'>
        <img src={logo} className="App-logo" alt="Datalinc Logo" />
      </div>
      <div className='column-2'>
        <h1>Welcome to <code>Datalinc.</code></h1>
        <h3>Everything from HTML to Web3.</h3>
        <p>Website coming soon.</p>
        </div>
        </div>
  )
};

export default Hero;
