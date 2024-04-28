import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from 'react-bootstrap';
import LandingPage from './LandingPage';
import App from '../App';
import { Routes } from 'react-router';

const Navbar = () => {
  <Router>
  <Navbar />
  <Routes>
    {/* <Route exact path="/" component={HomePage} /> */}
    <Route path="/" element={<LandingPage />} />
    <Route path="/dating" element={<App />} />
    {/* <Route path="/horoscope" component={HoroscopePage} /> */}
  </Routes>
</Router>


  return (

    
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="#home">React App</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href = "/">Landing Page</Nav.Link>
          <Nav.Link href="/dating">Dating Page</Nav.Link>
          <Nav.Link href="#horoscope">Horoscope Page</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;