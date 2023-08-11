import React, { useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import HeroSelection from './components/Hero';
import GallerySection from './components/GallerySelection';
import StoreSection from './components/StoreSection';
import DragonTokenIntroduction from './components/DragonCoinIntro';

function App() {

  const [defaultAccount, setDefaultAccount] = useState(null);

  const handleDefaultAccountChange = (value) => {
    setDefaultAccount(value);
  }
  return (
    <div className="App">
      <Navbar defaultAccountChange={handleDefaultAccountChange} />
      <Divider />
      <GallerySection />
      <Divider />
      <HeroSelection defaultAccount={defaultAccount} />
      <Divider />
      <DragonTokenIntroduction />
      <Divider />
      <StoreSection />
      <Divider />
    </div>
  );
}

export default App;
