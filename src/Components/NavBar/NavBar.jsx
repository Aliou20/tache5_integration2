import "./NavBar.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

function NavBar() {

  const links = ["Home" , "Product" , "Pricing" , "Contact"]
  return (
    <Navbar expand="lg" className="header">
      <Container className=""> 
        <Navbar.Brand href="#home" className="text-white fw-bold fs-2">BrandName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              links.map((link , index) => (
                <Nav.Link key={`${index}-${link}`} href="#home" className="text-white">{link}</Nav.Link>

              ))
            }
          </Nav>
          <div className="ms-auto">
            <button className="login">Login</button>
            <button className="join rounded shadow-ms">JOIN US 
            <FaArrowRight className="ms-2 my-auto"/>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
