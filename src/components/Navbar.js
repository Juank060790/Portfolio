import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "../App.css";

export default function NavbarTop() {
  return (
    <Container fluid className="d-flex justify-content-center navbarMenu">
      <Navbar
        style={{
          fontWeight: "400",
          fontSize: "23px",
          width: "100vw",
        }}
        className="navbarMenu NavbarText m-auto "
        variant="dark"
        expand="lg"
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-light">
            <Nav.Link className="m-2 menulink" href="#home">
              JuanCa
            </Nav.Link>
            <Nav.Link className="m-2 menulink" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="m-2 menulink" href="#education">
              Skills
            </Nav.Link>
            <Nav.Link className="m-2 menulink" href="#footer">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
