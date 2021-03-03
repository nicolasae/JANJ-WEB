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
import Login from "./Components/login/LoginForm"
import Register from "./Components/login/RegisterForm"
import Services from "./Components/services/Services"
import About from "./Components/about/About"
import Contact from "./Components/about/Contact"
import Convert from "./Components/services/Convert"



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Hero} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Register} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/convert' exact component={Convert} />
        <Route path='/contact' exact component={Contact} />
      </Switch>

    </Router>
  );
}

export default App;