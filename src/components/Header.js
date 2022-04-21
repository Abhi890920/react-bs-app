import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap';


 class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
          <Link className="navbar-brand" to="/">
            <img  src= {logo}  height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />  
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/gallery">Gallery</Link>
              <Link className="nav-link" to="/products">Products</Link>
              <NavDropdown title="Services"  id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/service1">Service1</Link>
                <Link className="dropdown-item" to="/service2">Service2</Link>
                <Link className="dropdown-item" to="/service3">Service3</Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/more-service">More Service</Link>
              </NavDropdown>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header
