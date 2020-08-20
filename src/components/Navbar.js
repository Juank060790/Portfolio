import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Row } from "react-bootstrap";
import "../App.css";

export default function NavbarTop() {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row md={8}>
          <Navbar
            style={{
              marginLeft: "40%",
              marginTop: "15px",
              fontWeight: "400",
              fontSize: "20px",
            }}
            className="mr-auto"
            fixed="top"
            variant="dark"
          >
            <Navbar.Brand href="#home">JuanCa</Navbar.Brand>
            <Nav>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#education">Skills</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
}
