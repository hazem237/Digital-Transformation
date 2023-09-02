import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/sections/HomePage';
import Strategy from './components/sections/Strategy';
import AboutUs from './components/sections/aboutus';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutUs />
      <Strategy />
    </div>
  );
}

export default App;
