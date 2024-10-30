import React,{useContext } from "react";
import './AppBar.css';
import { Nav,Navbar } from "react-bootstrap";
import {NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import { MyContext } from "../App";


function AppBar() {

    const { showMob, setShowMob } = useContext(MyContext);


    return(

        <>
            <Navbar 
            expand={"sm"}
            variant="light"
            > 

            <Container fluid>

                <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-sm`}
                onClick={() => setShowMob(true)}
                style={{fontSize:'13px'}}
                />


                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-sm`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                    className="offcan_nav"
                    show={showMob}
                    onHide={() => setShowMob(false)}
                > 
                    <Offcanvas.Header closeButton className="header shadow-sm">

                    <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-sm`}
                        className="me-2 ms-2"
                    >

                    <div className='logo'>Prot<span style={{color:'red',fontSize: "25px"}}>folio</span></div>


                    </Offcanvas.Title>
                    </Offcanvas.Header>


                    <Offcanvas.Body
                        className="off_body"
                        onTouchMove={() => setShowMob(false)}
                    >

                    <Nav className="justify-content-end flex-grow-1 pe-3"> 

                 {/*====================== Home ======================== */}

                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span> Home</span>
                        </Nav.Link>

                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span> About Me</span>
                        </Nav.Link>


                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Education</span>
                        </Nav.Link>


                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Exprience</span>
                        </Nav.Link>


                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Skills</span>
                        </Nav.Link>


                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Certificate</span>
                        </Nav.Link>


                        
                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Porject</span>
                        </Nav.Link>


                        <Nav.Link
                        as={NavLink}
                        to="/"
                        className="app_menu"
                        onClick={() => setShowMob(false)}
                        >
                        <i className="bi bi-house-door-fill"></i>
                        <span>Contact Us</span>
                        </Nav.Link>

                    </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        </>


    )
}

export default AppBar;