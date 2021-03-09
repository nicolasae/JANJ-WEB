import React from 'react';
import '../../App.css';
import '../../styles/Login.css'
import NavBar from '../navbar/Navbar';

function Register() {
    return (
        <div>
            <NavBar/>
        <div className="container-login">
            <div className="card card0 border-0">
                <div className="preview-login">
                    <div className="card1">
                        <div className="row"> <img src="janj-symbol.png" /> </div>
                    </div>
                    <div className="preview-login">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3"> 
                                <label> <h6 className="form-group-login">Correo Electronico</h6>  </label>
                                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/>
                            </div>
                            <div className="row px-3"> 
                                <label> <h6 className="form-group-login">Contraseña</h6></label>
                                <input type="password" name="password" placeholder="Enter password"/>
                            </div>
                            <div className="row px-3"> 
                                <label> <h6 className="form-group-login">Nombres</h6>  </label>
                                <input className="mb-4" type="text" name="name" placeholder="Enter Name"/>
                            </div>
                            <div className="row px-3"> 
                                <label> <h6 className="form-group-login">Apellidos</h6></label>
                                <input type="text" name="Lastname" placeholder="Enter Lastname"/>
                            </div>
                            <div className="row px-3"> 
                                <label> <h6 className="form-group-login">Telefono</h6>  </label>
                                <input className="mb-4" type="number" name="phone" placeholder="Enter a Phone number"/>
                            </div>
                            <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center form-group-login">Register</button></div>
                        </div>
                    </div>
                </div>
                            
            </div>
        </div>
        </div>

    );
  }
  
  export default Register
  