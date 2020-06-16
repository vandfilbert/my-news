import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavbarNews from './Navbar';
import News from './CardNews';

function App() {
  return (
    <div className="App">
      <NavbarNews/>
      <News />
    </div>
  );
}

export default App;
