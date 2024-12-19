import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function root() {
  return (
    <>
    <header>
        <Container>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand href="/">Products</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Features</Nav.Link>
                <Nav.Link href="/">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </Container>    
    </header>
    <Outlet/>
    <footer></footer>
    </>
  )
}

export default root