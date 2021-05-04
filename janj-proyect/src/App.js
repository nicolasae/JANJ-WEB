import React,{useState} from 'react';
import { Switch, Route} from 'react-router-dom'


// Componentes
import HomePage from "./Components/HomePage";
import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.css'
import Converter from "./Components/pages/Converter"
import Premium from "./Components/pages/Premium"
import RecoverPassword from "./Components/pages/RecoverPassword"

// USUARIOS
import EditProfile from './Components/Users/EditProfile'
// PREMIUM
import Homep from './Components/Users/Premium/Home'
import Educacionp from './Components/Users/Premium/Services/Educacion'
import Prediccionp from './Components/Users/Premium/Services/Prediccion'
import Seguimientop from './Components/Users/Premium/Services/Seguimiento'
import Simulacionp from './Components/Users/Premium/Services/Simulacion'
import Subscriptionp from './Components/Users/Premium/Subscription'



// REGISTRADOS
import Homer from './Components/Users/Registered/Home'
import Educacionr from './Components/Users/Registered/Services/Educacion'
import Prediccionr from './Components/Users/Registered/Services/Prediccion'
import Seguimientor from './Components/Users/Registered/Services/Seguimiento'
import Simulacionr from './Components/Users/Registered/Services/Simulacion'
import Subscriptionr from './Components/Users/Registered/Subscription'

const App= props=> {

  return (
      <Switch>
        <Route exact path='/'  component={HomePage} />
        <Route path='/converter' exact render={propiedades => (<Converter {...propiedades} />)}/>
        <Route path='/premium' exact component={Premium}/>
        <Route path='/recover' exact render={propiedades => (<RecoverPassword {...propiedades} />)}/>
        {/* USUARIOs*/}
        <Route path='/e' exact render={propiedades => (  <EditProfile {...propiedades} />)}/>
        {/* USUARIO REGISTRADO */}
        <Route path='/homer' exact component={Homer}/>
        <Route path='/educacionr' exact render={propiedades => (  <Educacionr {...propiedades} />)}/>
        <Route path='/seguimientor' exact render={propiedades => (<Seguimientor {...propiedades} />)}/>
        <Route path='/simulacionr' exact render={propiedades => ( <Simulacionr {...propiedades} />)}/>
        <Route path='/prediccionr' exact render={propiedades => ( <Prediccionr {...propiedades} />)}/>
        <Route path='/subscriptionr' exact render={propiedades => ( <Subscriptionr {...propiedades}/>)}/>
        {/* USUARIO PREMIUM */}
        <Route path='/homep' exact render={propiedades => (<Homep {...propiedades} />)}/>
        <Route path='/educacionp' exact render={propiedades => (<Educacionp {...propiedades} />)}/>
        <Route path='/seguimientop' exact render={propiedades => (<Seguimientop {...propiedades} />)}/>
        <Route path='/simulacionp' exact render={propiedades => (<Simulacionp {...propiedades} />)}/>
        <Route path='/prediccionp' exact render={propiedades => (<Prediccionp {...propiedades} />)}/>
        <Route path='/subscriptionp' exact render={propiedades => ( <Subscriptionp {...propiedades}/>)}/>


      </Switch>
  );
}

export default App;