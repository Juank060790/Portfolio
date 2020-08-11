import React from "react";
import { Jumbotron, Button, Col, Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";

import "../App.css";

export default function Header() {
  const Bounce = styled.div`
    animation: 5s ${keyframes`${fadeInRightBig}`};
  `;
  const BounceLeft = styled.div`
    animation: 5s ${keyframes`${fadeInLeftBig}`};
  `;

  return (
    <Jumbotron style={{ background: "none" }}>
      <Container className="d-flex ">
        <Col lg={9}>
          <Bounce>
            <h1>Juan Carlos Duran Solorzano</h1>
            <p>Welcome!</p>
            <p>
              <Button variant="warning">Contact</Button>
            </p>{" "}
          </Bounce>
        </Col>
        <Col lg={4} style={{ marginTop: "10rem", textAlign: "end" }}>
          <BounceLeft>
            <h4>
              Welcome to my portfolio here you'll see all the experience,
              projects and achivements collected in the past years.{" "}
            </h4>
          </BounceLeft>
        </Col>
      </Container>
    </Jumbotron>
  );
}
