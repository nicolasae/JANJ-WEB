import React from 'react';
import '../../App.css';

function Contact() {
    return (
        <div>
            <h1> Contact </h1>
            <div className="container-login">
                <div className="card card0 border-0">
                    <div className="preview-login">
                        <div className="card1">
                            <div className="row"> <img src="janj-symbol.png" /> </div>
                        </div>
                        <div className="preview-login">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row px-3"> 
                                    <label> <h6 className="form-group-login">Email Address</h6>  </label>
                                    <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/>
                                </div>
                                <div className="row px-3"> 
                                    <label> <h6 className="form-group-login">Password</h6></label>
                                    <input type="password" name="password" placeholder="Enter password"/>
                                </div>

                                <div class="row px-3 mb-4">
                                    <a href="#" class="ml-auto mb-0 form-group-login-s">Forgot Password?</a>
                                </div>
                                <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center form-group-login">Contact</button></div>
                                <div class="row mb-4 px-3"> <small class="font-weight-bold form-group-login-s">Don't have an account? <a class="text-danger ">Register</a></small></div>

                            </div>
                        </div>
                    </div>
                                
                </div>
            </div>
        </div>
  

    );
  }
  
  export default Contact
  