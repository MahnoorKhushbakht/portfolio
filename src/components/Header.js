import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';
import ProfileImage from '../images/ProfileImage.jpeg';
import './css/Header.css'

function Header() {

  const transparentNavbarStyles = {
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  };

  const linkStyles = {
    color: '#F6F1EE',
    fontSize: '18px',
  };

  return (
    <Navbar
      expand="md"
      style={transparentNavbarStyles}
      data-bs-theme="dark"
      variant="dark"
      className='header'
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={ProfileImage}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="avatar"
            style={{ borderRadius: '50%' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#background" style={linkStyles}>
              Background
            </Nav.Link>
            <Nav.Link href="#projects" style={linkStyles}>
              Projects
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#skills">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#review">
                Review
              </NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#about">
                About
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default Header;
