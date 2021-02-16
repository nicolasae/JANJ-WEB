import React from 'react';
import './styles /NavBar.css';
import NavBar from './components /navbar/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar/>
    </Router>
      
    
  );
}

export default App;
