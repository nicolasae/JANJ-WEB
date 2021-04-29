import React from 'react';
import '../../App.css';
import { GoogleLogin } from 'react-google-login';


function Login() {
    const responseGoogle = (response) => {
        console.log(response);
      }
    return (
        <div className="card card0 border-0">
            <div className="preview-login">
                    <div className="card2 card border-0 px-4 py-5">
                        <div className="row px-3 text-center"> 
                            <h6 className=" form-group-login">Correo Electrónico</h6>
                            <input className="mb-4" type="email" name="email" placeholder="Ingrese su correo electrónico"/>
                        </div>
                        <div className="row px-3 text-center"> 
                            <h6 className=" form-group-login">Contraseña</h6>
                            <input type="password" name="password" placeholder="Ingrese su contraseña"/>
                        </div>
                        <div className="row px-3 mb-4">
                            <a href="#" className="ml-auto mb-0 form-group-login-s">Olvidaste tu contraseña?</a>
                        </div>
                        <div className="row mb-3 px-3">
                            <button onClick={()=>{console.log("hola")}} type="submit" className="btn btn-blue text-center form-group-login">Ingresar</button>
                        </div>
                        <div className="row mb-4 px-3">
                            
                            <small className="font-weight-bold form-group-login-s">No tienes cuenta? <a className="text-danger" href="/signup">Registrate</a></small>
                        </div>
                        <div className ="text-center">
                            <GoogleLogin
                                clientId="952616300736-u6cn526c802tefo4nm28sucaqcgad9sg.apps.googleusercontent.com"
                                buttonText="Iniciar Sesion Con Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        </div>
            </div>
                        
        </div>


    );
  }
  
  export default Login
  