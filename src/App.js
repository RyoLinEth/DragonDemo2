import React, { useState } from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Divider from './components/Divider';
import HeroSelection from './components/Hero';
import GallerySection from './components/GallerySelection';
import StoreSection from './components/StoreSection';
import DragonTokenIntroduction from './components/DragonCoinIntro';
import ContactSection from './components/ContactSection';

function App() {

  const [defaultAccount, setDefaultAccount] = useState(null);
  const [defaultChain, setDefaultChain] = useState(null);

  const handleDefaultAccountChange = (value) => {
    setDefaultAccount(value);
  }
  const handleDefaultChainChange = (value) => {
    setDefaultChain(value);
  }

  return (
    <div className="App">
      <Navbar
      //  defaultAccountChange={handleDefaultAccountChange} defaultChainChange={handleDefaultChainChange}
      />
      <Divider />
      <GallerySection defaultAccountChange={handleDefaultAccountChange} defaultChainChange={handleDefaultChainChange} />
      <Divider />
      <HeroSelection defaultAccount={defaultAccount} defaultChain={defaultChain} />
      <Divider />
      <ContactSection defaultAccount={defaultAccount} />
      <Divider />
      <DragonTokenIntroduction />
      <Divider />
      <StoreSection />
      <Divider />
    </div>
  );
}

export default App;
