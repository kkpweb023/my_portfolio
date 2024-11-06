import React from 'react';
import "./NavBar.css";
import {Navbar,Nav} from "react-bootstrap";
import AppBar from './AppBar';





const NavBar = () =>{

      return(
            <>
                <Navbar 
                    expand={"sm"}
                    variant="light"
                    className="pt-0 pb-0 w-1000 shadow-sm"
                    style={{position:"sticky",top:"0px",zIndex:"9",backgroundColor:"white"}}
                >        
                
                    <Navbar.Brand className="me-5 ms-3">
                        <div className='logo'>Port<span style={{color:'red'}}>folio</span></div>
                    </Navbar.Brand>


                    <Nav className="me-auto nav_bar">
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#home' className="menu">Home</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#about' className="menu">About Me</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#education' className="menu">Education</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#experience' className="menu">Exprience</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#skills' className="menu">Skills</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#certificate' className="menu">Certificate</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} offset={-70} duration={500} href='#project' className="menu">Project</Nav.Link>
                        <Nav.Link activeclass='active' spy={'true'} smooth={'true'} href='#contact' className="menu">Contact Us</Nav.Link>
                    </Nav>


                    <AppBar />

                   
                </Navbar>
            </>

      );
};
export default NavBar;