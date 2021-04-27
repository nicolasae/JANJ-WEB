import React,{useState} from 'react';
import { Switch, Route} from 'react-router-dom'


// Componentes
import HomePage from "./Components/HomePage";
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.css'
import Converter from "./Components/pages/Converter"
import Premium from "./Components/pages/Premium"
//SERVICIOS
import Educacion from "./Components/Services /Educacion"
import Simulacion from "./Components/Services /Simulacion"
import Prediccion from "./Components/Services /Prediccion"
import Seguimiento from "./Components/Services /Seguimiento"

// USUARIOS




// REGISTRADOS
import HomeR from './Components/users/registered/home'


const App= props=> {

  return (
      <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route path='/converter' exact render={propiedades => (<Converter {...propiedades} />)}/>
        <Route path='/premium' exact component={Premium}/>
        <Route path='/homeR' exact component={HomeR}/>
        {/* SERVICIOS */}
        <Route path='/educacion' exact component={Educacion}/>
        <Route path='/simulacion' exact component={Simulacion}/>
        <Route path='/prediccion' exact component={Prediccion}/>
        <Route path='/seguimiento' exact component={Seguimiento}/>

      </Switch>
  );
}

export default App;