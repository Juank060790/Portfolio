import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, Row } from "react-bootstrap";
import "../App.css";

export default function NavbarTop() {
  return (
    <div>
      <Container className="d-flex justify-content-center navbarMenu">
        <Row md={12}>
          <Navbar
            style={{
              fontWeight: "400",
              fontSize: "23px",
            }}
            className="mr-auto navbarMenu"
            fixed="top"
            variant="dark"
          >
            <Nav className="NavbarText" style={{ marginLeft: "3%" }}>
              <Nav.Link href="#home">JuanCa</Nav.Link>
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
