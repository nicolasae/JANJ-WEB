import React,{useState} from 'react';
import { Switch, Route} from 'react-router-dom'


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Componentes
import HomePage from "./Components/HomePage";
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.css'
import Login from "./Components/pages/LoginForm"
import Register from "./Components/pages/RegisterForm"
import Services from "./Components/services/Services"
import Contact from "./Components/home/Contact"
import Convert from "./Components/services/Convert"


function App() {
  return (
      <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Register} />
        <Route path='/services' exact component={Services} />
        <Route path='/convert' exact component={Convert} />
        <Route path='/contact' exact component={Contact} /> 
      </Switch>
  );
}

export default App;