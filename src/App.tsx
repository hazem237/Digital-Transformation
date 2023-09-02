import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/sections/HomePage';
import Strategy from './components/sections/Strategy';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <HomePage/>
    <Strategy/>
    </div>
  );
}

export default App;
