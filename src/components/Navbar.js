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
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Education</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}
