import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stackoverflow from './pages/Stackoverflow';
import Flights from './pages/Flights';

class App extends Component{
  render(){
    return <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stackoverflow" element={<Stackoverflow />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </>
  }
}

export default App;
