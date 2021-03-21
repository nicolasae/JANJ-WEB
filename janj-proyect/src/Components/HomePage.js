import React, {Fragment} from 'react';
import NavBar from './navbar/Navbar';
import Cover from './home/Cover';
import About from './home/About'
import Services from './home/Services';
import Contact from './home/Contact';


export default function HomePage(){
    return(
        <div>
            <NavBar/>           
            <Cover/>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
}