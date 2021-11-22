import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.png'


function Navs() {
  return (
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        {/* <Navbar.Brand href="/" className="orange"><strong>Akshiptika</strong></Navbar.Brand> */}
        <Navbar.Brand href="/" className="orange"><img src={logo} alt={logo} class="img-fluid logo" /> <span>Akshiptika</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link eventKey="1" href="#hero">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" href="#services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" href="#team">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" href="#contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="6" href="#">Blog</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar> 
  )
}

export default Navs;
