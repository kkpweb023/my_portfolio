import React from 'react';
import "./NavBar.css";
import {Navbar,Nav,NavLink} from "react-bootstrap";
import AppBar from './AppBar';





const NavBar = () =>{

      return(
            <>
                <Navbar 
                    expand={"sm"}
                    variant="light"
                    className="pt-0 pb-0 w-1000 shadow-sm"
                >        
                
                    <Navbar.Brand className="me-5 ms-3">
                        <div className='logo'>Port<span style={{color:'red'}}>folio</span></div>
                    </Navbar.Brand>


                    <Nav className="me-auto nav_bar">
                        <Nav.Link as={NavLink} to='/' className="menu">Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">About Me</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Education</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Exprience</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Skills</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Certificate</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Protfolio</Nav.Link>
                        <Nav.Link as={NavLink} to='/' className="menu">Contact Us</Nav.Link>
                    </Nav>


                    <AppBar />

                   
                </Navbar>
            </>

      );
};
export default NavBar;