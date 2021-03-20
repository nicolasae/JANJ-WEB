import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar';
import Cover from './home/Cover';
import About from './home/About'
import Services from './home/Services';
import Contact from './home/Contact';
import '../styles/HomePage.css'


export default function HomePage(){
    return(
        <div>
            <Navbar/>           
                <Cover/>
                <About/>
                <Services/>
                <Contact/>
        </div>
    );
}