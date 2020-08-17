import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "../App.css";

export default function NavbarTop() {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Navbar variant="dark">
          <Navbar.Brand href="#home">JuanCa</Navbar.Brand>
          <Nav className="mr-auto" style={{}}>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
