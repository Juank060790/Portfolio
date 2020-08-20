import React from "react";
import { Jumbotron, Col, Container, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";
import logo from "../img/logo192.png";
import logohtml from "../img/html5logo.svg";
import logocss from "../img/css3-alt-brands.svg";
import logonode from "../img/node-brands.svg";
import logojs from "../img/js-brands.svg";
import logowp from "../img/wordpress-simple-brands.svg";
import logoad from "../img/adobe-brands.svg";
import "../App.css";

export default function Education() {
  const BounceRight = styled.div`
    animation: 5s ${keyframes`${fadeInRightBig}`};
  `;
  const BounceLeft = styled.div`
    animation: 5s ${keyframes`${fadeInLeftBig}`};
  `;

  return (
    <Jumbotron id="education" style={{ background: "none" }}>
      <Container className="d-flex ">
        <Col lg={6}>
          <h3>Who am I?</h3>
          <BounceRight>
            <p>
              A creative enthusiast who enjoys new challenges, always looking to
              improve and learn different skills in differetn fields. Currently
              developing, growing and getting experience in the field of full
              stack developer. Right now with the experience I have earnt over
              the years working for big, startups and own projects I could mix
              them with my passion that is coding.
            </p>
            <img
              src="https://i1.wp.com/juancaphotography.com/wp-content/uploads/2019/08/DSC04819-Editar.jpg?resize=768%2C512&ssl=1"
              alt="portrait"
              width="350px"
              className="profileImg"
            />
          </BounceRight>
        </Col>
        <Col lg={6} style={{ marginTop: "5rem", textAlign: "center" }}>
          <BounceLeft>
            <h1>Skills</h1>
            <Row>
              <Col>
                <img src={logohtml} alt="react" style={{ width: "70px" }} />
              </Col>
              <Col>
                <img
                  src={logocss}
                  alt="react"
                  style={{ width: "70px", marginTop: "3rem" }}
                />
              </Col>
              <Col>
                <img src={logojs} alt="react" style={{ width: "70px" }} />
              </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Col>
                <img src={logo} alt="react" style={{ width: "70px" }} />
              </Col>
              <Col>
                <img
                  src={logonode}
                  alt="react"
                  style={{ width: "70px", marginTop: "3rem" }}
                />
              </Col>
              <Col>
                <img src={logowp} alt="react" style={{ width: "70px" }} />
              </Col>
            </Row>
            <Col>
              <img
                src={logoad}
                alt="react"
                style={{ width: "70px", marginTop: "3rem" }}
              />
            </Col>
          </BounceLeft>
        </Col>
      </Container>
    </Jumbotron>
  );
}
