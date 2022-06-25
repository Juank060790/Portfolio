import React from "react";
import { Jumbotron, Col, Container, Row } from "react-bootstrap";
// import styled, { keyframes } from "styled-components";
// import { fadeInRightBig } from "react-animations";
import logo from "../img/logo192.png";
import logohtml from "../img/html5logo.svg";
import logocss from "../img/css3-alt-brands.svg";
import logonode from "../img/node-brands.svg";
import logojs from "../img/js-brands.svg";
import logowp from "../img/wordpress-simple-brands.svg";
import logoad from "../img/adobe_cloud.png";
import "../App.css";
import toonPortrait from "../images/toonportrait.png";
import "../birds.scss";
// import Game from "./Game";

export default function Education() {
  // const BounceRight = styled.div`
  //   animation: 2s ${keyframes`${fadeInRightBig}`};
  // `;
  // const BounceLeft = styled.div`
  //   animation: 5s ${keyframes`${fadeInLeftBig}`};
  // `;

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12} md={12}>
            <Container fluid className="containerbirds">
              <h3 className="projectTitle">Who am I? & Skills </h3>
              <div className="bird-container bird-container--one">
                <div className="bird bird--one"></div>
              </div>

              <div className="bird-container bird-container--two">
                <div className="bird bird--two"></div>
              </div>

              <div className="bird-container bird-container--three">
                <div className="bird bird--three"></div>
              </div>

              <div className="bird-container bird-container--four">
                <div className="bird bird--four"></div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
      <Jumbotron id="education" style={{ background: "none" }}>
        <Container className="d-flex logoFlexDirection ">
          <Col lg={6} md={5}>
            <div>
              <ul className="text-ul">
                <li className="educationText educationList">
                  <i className="educationIcon fas fa-dot-circle"></i>A junior
                  full stack web developer, with two years experience in HTML,
                  CSS, Javascript, ReactJS, NodeJS, MongoDB, Figma, Python and
                  GCP.
                </li>
                <li className="educationText educationList">
                  <i className="educationIcon fas fa-dot-circle"></i>Passionate
                  about new technology and programming languages.
                </li>
                <li className="educationText educationList">
                  <i className="educationIcon fas fa-dot-circle"></i> I always
                  like to be researching new technologies and keeping my
                  knowledge updated with the latest frameworks and trends in the
                  programming world.
                </li>
                <li className="educationText educationList">
                  <i className="educationIcon fas fa-dot-circle"></i>Currently
                  studying an online computer science degree at University of
                  the people of California.
                </li>
              </ul>

              {/* <p>
                I am a junior full stack web developer, with one year experience
                in HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB, Figma,
                Python and GCP. I am passionate about new technology and
                programming languages. I always like to be researching new
                technologies and keeping my knowledge updated with the latest
                frameworks and trends in the programming world.
              </p> */}
              <img
                src={toonPortrait}
                alt="portrait"
                width="250px"
                className="profileImg"
              />
            </div>
          </Col>

          <div className="LogosSkills alignLogos">
            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logohtml}
                alt="html"
                style={{ width: "70px" }}
              />
            </div>
            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logocss}
                alt="CSS"
                style={{ width: "70px" }}
              />
            </div>
            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logojs}
                alt="JS"
                style={{ width: "70px" }}
              />
            </div>

            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logo}
                alt="react"
                style={{ width: "70px" }}
              />
            </div>
            <div className="alignLogos node-container">
              <img
                className="logoSkills nodelogo"
                src={logonode}
                alt="NodeJS"
                style={{ width: "70px", height: "70px" }}
              />
            </div>
            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logowp}
                alt="WP"
                style={{ width: "70px" }}
              />
            </div>

            <div className="alignLogos">
              <img
                className="logoSkills"
                src={logoad}
                alt="Adobe"
                style={{ width: "70px" }}
              />
            </div>
          </div>
        </Container>
        {/* <Game /> */}
      </Jumbotron>
    </>
  );
}
