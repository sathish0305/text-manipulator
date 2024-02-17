import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png'
import { Link, Route, Routes } from 'react-router-dom';
import TextUtility from './TextUtility';
import PasswordGenerator from './PasswordGenerator';
import '../App.css'

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <img
              alt=""
              src={logo}
              width="100%"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='link' to="/">Text Utility</Link>
              <Link className='link' to="/passwordgenerator">Password Generator</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<TextUtility />} />
        <Route path='/passwordgenerator' element={<PasswordGenerator />} />
      </Routes>
    </>
  )
}

export default NavigationBar
