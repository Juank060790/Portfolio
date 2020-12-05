import React, { useState } from "react";
import { Jumbotron, Button, Col, Container, Row, Modal } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";
import Particles from "react-particles-js";

import "../App.css";

export default function Header() {
  let showModal = () => {
    setShow(true);
  };
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const Bounce = styled.div`
    animation: 5s ${keyframes`${fadeInRightBig}`};
  `;
  const BounceLeft = styled.div`
    animation: 5s ${keyframes`${fadeInLeftBig}`};
  `;

  return (
    <Jumbotron
      className="jumbotron-margin"
      id="home"
      style={{ background: "none", minHeight: "100vh" }}
    >
      <Container className="d-flex ">
        <Row>
          <Particles
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              height: "200px",
              color: "red",
            }}
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 700,
                  },
                },
              },
            }}
          />
        </Row>{" "}
        <Col lg={9} md={6}>
          <Bounce>
            <h1>Juan Carlos Duran Solorzano</h1>
            <p>Welcome!</p>
            <p>
              <Button
                onClick={showModal}
                className="ContactButton"
                variant="warning"
              >
                Contact
              </Button>
            </p>{" "}
          </Bounce>
        </Col>
        <Col lg={4} md={6} style={{ marginTop: "10rem", textAlign: "end" }}>
          <BounceLeft>
            <h3>
              A showcase of my portfolio, here you will find a collection of all
              my experience, projects and achievements to date.{" "}
            </h3>
          </BounceLeft>
        </Col>
      </Container>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Contact</h1>
          </Modal.Title>
        </Modal.Header>
        <ol>Email: Juank060790@gmail.com</ol>
        <ol>Phone: 0388595445</ol>
      </Modal>{" "}
    </Jumbotron>
  );
}
