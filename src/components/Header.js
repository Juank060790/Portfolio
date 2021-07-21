import React from "react";
import { Jumbotron, Col, Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";
import Particles from "react-particles-js";

import "../App.css";

export default function Header() {
  // let showModal = () => {
  //   setShow(true);
  // };
  // let [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const Bounce = styled.div`
    animation: 2s ${keyframes`${fadeInRightBig}`};
  `;
  const BounceLeft = styled.div`
    animation: 2s ${keyframes`${fadeInLeftBig}`};
  `;

  return (
    <Jumbotron
      className="jumbotron-margin"
      id="home"
      style={{ background: "none", minHeight: "40vh" }}
    >
      <Container className="d-flex headerText ">
        <Col lg={6} md={7} sm={12} xs={12}>
          <Bounce>
            <h1 className="titleweight m-2">
              Juan Carlos <br></br> Duran Solorzano
            </h1>

            {/* <Button
              onClick={showModal}
              className="ContactButton"
              variant="warning"
            >
              Contact
            </Button> */}
          </Bounce>

          <BounceLeft>
            <h2 className="subTitleweight m-2 m-1">Full Stack WebDeveloper</h2>
            <br /> A showcase of my live as a developer, here you will find a
            collection of all my experience, projects and achievements to date.{" "}
          </BounceLeft>
        </Col>
        <div style={{ background: "none" }}>
          <Particles
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              height: "200px",
              maxHeight: "50vh",
            }}
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 600,
                  },
                },
                color: {
                  value: ["#ffbb33", "33b6e575"],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 1,
                    color: "#b6b2b2",
                  },
                },
                opacity: {
                  value: 0.5211089197812949,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 8.017060304327615,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 12.181158184520175,
                    size_min: 0.1,
                    sync: true,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#c8c8c8",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 10,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
            }}
          />
        </div>{" "}
      </Container>
      {/* <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Contact</h1>
          </Modal.Title>
        </Modal.Header>
        <ol>Email: Juank060790@gmail.com</ol>
        <ol>Phone: 0388595445</ol>
      </Modal>{" "} */}
    </Jumbotron>
  );
}
