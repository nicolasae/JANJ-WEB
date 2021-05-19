import React,{useState} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom'


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
  const [token, setToken] = useState("")
  const [idusuario, setIdusuario] = useState("")
  const [nombre, setNombre] = useState("")
  const [rol, setRol] = useState("")
  return (
	  <div>
		{ idusuario !== "" ?( rol !== "" ? <Redirect push to={"/"+rol}/> : null): null}
		<Switch>
			<Route exact path='/' exact render={propiedades => (<HomePage {...propiedades} setRol={setRol} setToken={setToken} setIdusuario={setIdusuario} setNombre={setNombre}/>)}/>
			<Route path='/converter' exact render={propiedades => (<Converter {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol}/>)}/>
			<Route path='/premium' exact component={Premium}/>
			<Route path='/recover' exact render={propiedades => (<RecoverPassword {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			{/* USUARIOs*/}
			<Route path='/editprofile' exact render={propiedades => (  <EditProfile {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			{/* USUARIO REGISTRADO */}
			<Route path='/register' exact component={Homer}/>
			<Route path='/register/educacion' exact render={propiedades => (  <Educacionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol}/>)}/>
			<Route path='/register/seguimiento' exact render={propiedades => (<Seguimientor {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/register/simulacion' exact render={propiedades => ( <Simulacionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/register/prediccion' exact render={propiedades => ( <Prediccionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/register/subscription' exact render={propiedades => ( <Subscriptionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol}/>)}/>
			{/* USUARIO PREMIUM */}
			<Route path='/premium' exact render={propiedades => (<Homep {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/premium/educacion' exact render={propiedades => (<Educacionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/premium/seguimiento' exact render={propiedades => (<Seguimientop {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/premium/simulacion' exact render={propiedades => (<Simulacionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/premium/prediccion' exact render={propiedades => (<Prediccionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} />)}/>
			<Route path='/premium/subscription' exact render={propiedades => ( <Subscriptionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol}/>)}/>


		</Switch>
	  </div>
  );
}

export default App;