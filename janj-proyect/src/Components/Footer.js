import React from "react";
import '../styles/Footer.css'
import Table from 'react-bootstrap/Table'

function Footer (){
  return(
  <div className="footer" >
    <b>Footer Content</b>
    <b>
      • <a href="#!">   Link 1   </a>
    </b>
    <b>
      • <a href="#!">  Link 2 </a>
    </b>
    <b>
      • <a href="#!">  Link 3 </a>
    </b>
    <b>   © 2020 Copyright</b>
  </div>
  )
};

export default Footer;