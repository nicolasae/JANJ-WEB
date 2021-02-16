import {React, Component } from "react";
import './styles/NavBar.css';
import NavBar from './Components/navbar/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <NavBar/>
      <Footer/>
    </Router>
  );
}

export default App;
