import React from 'react';
import NavBar from './components/NavBar';
import { HomePage, AboutUs, ContactUs, OurServices, Strategy } from './components/sections';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Strategy />
      <OurServices />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
