import React, {Fragment} from 'react';
// Componentes
import NavBar from './navbar/Navbar';
import Hero from './home/Hero';
import About from './home/About'
import Services from './home/Services';
import Suscription from './home/Suscription';
import Contact from './home/Contact';
//Styles 
import '../assets/css/style.css'
import '../assets/vendor/bootstrap/css/bootstrap.css'
import '../assets/vendor/font-awesome/css/font-awesome.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/venobox/venobox.css'
import { Nav } from 'react-bootstrap';

// import '../assets/vendor/owl.carousel/assets/owl.carousel.min.css'
// import '../assets/vendor/aos/aos.css'


export default function HomePage(){
    return(
        <div>
        <div>
            
            <link href="../assets/img/favicon.png" rel="icon" />
            <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet" />
            {/* Template Main CSS File */}
            <link href="../assets/css/style.css" rel="stylesheet" />
            <NavBar/>
            <Hero/>
            <About/>
            <Services/>
            <Suscription/>
            <Contact/>

            {/* ======= Facts Section ======= */}
            {/* <section id="facts">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h3 className="section-title">Facts</h3>
                    <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">232</span>
                    <p>Clients</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">521</span>
                    <p>Projects</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">1,463</span>
                    <p>Hours Of Support</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                    <span data-toggle="counter-up">15</span>
                    <p>Hard Workers</p>
                    </div>
                </div>
                </div>
            </section>End Facts Section */}
          
            {/* ======= Portfolio Section ======= */}
            {/* <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h3 className="section-title">Portfolio</h3>
                    <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>
                    </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="../assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 1</h4>
                        <p>App</p>
                        <a href="../assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="../assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="../assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="../assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a href="../assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="../assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a href="../assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="../assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 2</h4>
                        <p>Web</p>
                        <a href="../assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="../assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>App 3</h4>
                        <p>App</p>
                        <a href="../assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="../assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 1</h4>
                        <p>Card</p>
                        <a href="../assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="../assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Card 3</h4>
                        <p>Card</p>
                        <a href="../assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="../assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="../assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                    </div>
                </div>
                </div> 
            </section> */}
            {/* End Portfolio Section */}
            {/* ======= Team Section ======= */}
            {/* <section id="team">
                <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h3 className="section-title">Team</h3>
                    <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                    <div className="member" data-aos="fade-up" data-aos-delay={100}>
                        <div className="pic"><img src="../assets/img/team-1.jpg" alt="" /></div>
                        <h4>Walter White</h4>
                        <span>Chief Executive Officer</span>
                        <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="member" data-aos="fade-up" data-aos-delay={200}>
                        <div className="pic"><img src="../assets/img/team-2.jpg" alt="" /></div>
                        <h4>Sarah Jhinson</h4>
                        <span>Product Manager</span>
                        <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="member" data-aos="fade-up" data-aos-delay={300}>
                        <div className="pic"><img src="../assets/img/team-3.jpg" alt="" /></div>
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                        <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <div className="member" data-aos="fade-up" data-aos-delay={400}>
                        <div className="pic"><img src="../assets/img/team-4.jpg" alt="" /></div>
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                        <div className="social">
                        <a href><i className="fa fa-twitter" /></a>
                        <a href><i className="fa fa-facebook" /></a>
                        <a href><i className="fa fa-google-plus" /></a>
                        <a href><i className="fa fa-linkedin" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}
            {/* End Team Section */}
            {/* ======= Contact Section ======= */}
            {/* <section id="contact">
                <div className="container">
                <div className="section-header">
                    <h3 className="section-title">Contact</h3>
                    <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                </div> */}
                {/* Uncomment below if you wan to use dynamic maps */}
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height={380} frameBorder={0} style={{border: 0}} allowFullScreen />
                <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4">
                    <div className="info">
                        <div>
                        <i className="fa fa-map-marker" />
                        <p>A108 Adam Street<br />New York, NY 535022</p>
                        </div>
                        <div>
                        <i className="fa fa-envelope" />
                        <p>info@example.com</p>
                        </div>
                        <div>
                        <i className="fa fa-phone" />
                        <p>+1 5589 55488 55s</p>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
                        <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-8">
                    <div className="form">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}
            {/* End Contact Section */}
            
            {/* ======= Footer ======= */}
            <footer id="footer">
            <div className="footer-top">
                <div className="container">
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                © Copyright <strong>Regna</strong>. All Rights Reserved
                </div>
            </div>
            </footer>{/* End Footer */}
        </div>
        </div>
    );
}