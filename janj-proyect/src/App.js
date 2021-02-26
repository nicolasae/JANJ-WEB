import {React, Component } from "react";
import './styles/navbar/Navbar.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer'
import Hero from "./Components/pages/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Hero} />
      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;