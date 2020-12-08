import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "../App.css";

export default function NavbarTop() {
  return (
    <Container className="d-flex justify-content-center navbarMenu">
      <Navbar
        style={{
          fontWeight: "400",
          fontSize: "23px",
        }}
        className="navbarMenu NavbarText m-auto "
        fixed="top"
        variant="dark"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-light">
            <Nav.Link className="m-2" href="#home">
              JuanCa
            </Nav.Link>
            <Nav.Link className="m-2" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="m-2" href="#education">
              Skills
            </Nav.Link>
            <Nav.Link className="m-2" href="#footer">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
