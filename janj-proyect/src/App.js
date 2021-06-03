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
import Reloader from './Components/Users/Registered/Reloader'
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
  const [email, setEmail] = useState("")
  return (
	  <div>
		{ idusuario !== "" ?( rol !== "" ? <Redirect push to={"/"+rol}/> : null): null}
		<Switch>
			<Route exact path='/' exact render={propiedades => (<HomePage {...propiedades} setRol={setRol} setToken={setToken} setIdusuario={setIdusuario} setNombre={setNombre} setEmail={setEmail}/>)}/>
			<Route path='/converter' exact render={propiedades => (<Converter {...propiedades} setRol={setRol} setToken={setToken} setIdusuario={setIdusuario} setNombre={setNombre} setEmail={setEmail}/>)}/>
			<Route path='/premiumInfo' exact render={propiedades => (<Premium {...propiedades} setRol={setRol} setToken={setToken} setIdusuario={setIdusuario} setNombre={setNombre} setEmail={setEmail}/>)}/>
			<Route path='/recover' exact render={propiedades => (<RecoverPassword {...propiedades} setRol={setRol} setToken={setToken} setIdusuario={setIdusuario} setNombre={setNombre} setEmail={setEmail}/>)}/>
			{/* USUARIOs*/}
			<Route path='/editprofile' exact render={propiedades => (<EditProfile {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			{/* USUARIO REGISTRADO */}
			<Route path='/register' exact render={propiedades => (<Homer {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/register/reloader' exact render={propiedades => (<Reloader {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/register/educacion' exact render={propiedades => (  <Educacionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email}/>)}/>
			<Route path='/register/seguimiento' exact render={propiedades => (<Seguimientor {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/register/simulacion' exact render={propiedades => ( <Simulacionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/register/prediccion' exact render={propiedades => ( <Prediccionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/register/subscription' exact render={propiedades => ( <Subscriptionr {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email}/>)}/>
			{/* USUARIO PREMIUM */}
			<Route path='/premium' exact render={propiedades => (<Homep {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/premium/educacion' exact render={propiedades => (<Educacionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/premium/seguimiento' exact render={propiedades => (<Seguimientop {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/premium/simulacion' exact render={propiedades => (<Simulacionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/premium/prediccion' exact render={propiedades => (<Prediccionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email} />)}/>
			<Route path='/premium/subscription' exact render={propiedades => ( <Subscriptionp {...propiedades} token={token} idusuario={idusuario} nombre={nombre}  rol={rol} email={email}/>)}/>
		</Switch>
	  </div>
  );
}

export default App;