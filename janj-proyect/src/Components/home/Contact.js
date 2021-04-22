import React from 'react';
import '../../App.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css'


function Contact() {
    return (
            <section id="contact">
                <div class="container">
                    <div class="section-header">
                    <h3 class="section-title">Contáctenos</h3>
                    </div>
                </div>
                    <div class="container mt-5">
                        <div class="row justify-content-center">

                            <div class="col-lg-5 col-md-4">
                                <p>
                                    Nos encontramos en una mejora
                                    continúa por eso nos gustaría
                                    que nos compartieras tus
                                    opiniones, experiencias y
                                    recomendaciones acerca de la
                                    página, su funcionamiento o
                                    cualquier cosa que podamos
                                    hacer para mejorar nuestros
                                    servicios y atención al cliente.
                                </p>
                                <div class="social-links">
                                    <a href=""><i class="fa fa-twitter"></i></a>
                                    <a href=""><i class="fa fa-facebook"></i></a>
                                    <a href=""><i class="fa fa-google-plus"></i></a>
                                    <a href=""><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-8">
                                <div class="form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" />
                                    <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Correo"/>
                                    <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" />
                                    <div class="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="7"  placeholder="Comentarios"></textarea>
                                    <div className="validate"></div>
                                    </div>
                                    <div className="text-center">
                                        {/* <a type="button" className='btn-get-started'>   
                                        Send Message </a> */}
                                        <div className="text-center">
                                            <button  className="btn-get-started">Enviar</button>
                                        </div>

                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            </section>
    );
  }
  
  export default Contact
  