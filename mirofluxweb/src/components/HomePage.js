import React from 'react';
import Logo from './Designer.png';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Miroflux</h1>
      </header>
      <main>
        <p>Welcome to Miroflux</p>
        <img src={Logo} alt="Miroflux Logo" width  = "500" />
      </main>
    </div>
  );
}

export default HomePage;