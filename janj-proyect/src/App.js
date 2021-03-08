import React,{useState} from 'react';
import { Switch, Route} from 'react-router-dom'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Componentes
import HomePage from "./Components/HomePage";
import Navbar from './Components/navbar/Navbar';
import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer'
import Login from "./Components/login/LoginForm"
import Register from "./Components/login/RegisterForm"
import Services from "./Components/services/Services"
import About from "./Components/home/About"
import Contact from "./Components/home/Contact"
import Convert from "./Components/services/Convert"
import Cover from "./Components/home/Cover"


function App() {
  return (
      <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Register} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/convert' exact component={Convert} />
        <Route path='/contact' exact component={Contact} /> 
      </Switch>
  );
}

export default App;