import React from 'react';
import '../../App.css';
import Navbar from '../navbar/Navbar';


function Login() {
    return (
        <div>
            <Navbar/>
                <div className="section-login">
                    <div className="container-login">
                        <div className="card card0 border-0">
                            <div className="preview-login">
                                    <img src="janj-symbol.png" /> 
                                    <div className="card2 card border-0 px-4 py-5">
                                        <div className="row px-3"> 
                                            <label> <h6 className="form-group-login">Correo Electrónico</h6>  </label>
                                            <input className="mb-4" type="email" name="email" placeholder="Ingrese su correo electrónico"/>
                                        </div>
                                        <div className="row px-3"> 
                                            <label> <h6 className="form-group-login">Contraseña</h6></label>
                                            <input type="password" name="password" placeholder="Ingrese su contraseña"/>
                                        </div>

                                        <div class="row px-3 mb-4">
                                            <a href="#" class="ml-auto mb-0 form-group-login-s">Olvidaste tu contraseña?</a>
                                        </div>
                                        <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center form-group-login">Ingresar</button></div>
                                        <div class="row mb-4 px-3"> <small class="font-weight-bold form-group-login-s">No tienes cuenta? <a class="text-danger" href="/signup">Registrate</a></small></div>
                                </div>
                            </div>
                                        
                        </div>
                    </div>
                </div>
        </div>

    );
  }
  
  export default Login
  