import {React, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Librerias de estilos
import './styles/navbar/Navbar.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Componentes
import Navbar from './Components/navbar/Navbar';
import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer'
import Hero from "./Components/pages/Hero";
import Login from "./Components/pages/Login"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Hero} />
        <Route path='/iniciosesion' exact component={Login} />

      </Switch>

    </Router>
  );
}

export default App;