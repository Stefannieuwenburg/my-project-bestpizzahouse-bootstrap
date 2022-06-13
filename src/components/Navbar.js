import React from "react";
import  "../styles/Navbar.module.css";

import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
const HomeNavbar = () => {
  return (
      <>
          <Navbar className="nav position-sticky top-0" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <Nav.Link href="#home">Discount</Nav.Link>
                          <Nav.Link href="#home">Menu</Nav.Link>
                          <Nav.Link href="#link">About</Nav.Link>
                          <Nav.Link href="#link">Products</Nav.Link>
                          <Nav.Link href="#link">Location</Nav.Link>
                          <Nav.Link href="#link">Contact</Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          ;
      </>
  );
}
export default HomeNavbar;