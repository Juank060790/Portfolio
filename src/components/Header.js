import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import Particles from "react-particles-js";
import astronout from "../images/astronaut-1.svg";
import "../App.css";
import Moon from "./Moon";

const Header = () => {
  return (
    <Jumbotron
      className="jumbotron-margin"
      id="home"
      style={{ background: "none", minHeight: "40vh" }}
    >
      <Moon />

      <Container>
        <div>
          <h1 className="headerText titleweight ">Full Stack Web Developer</h1>

          <div className="social-header">
            <a
              href="https://github.com/Juank060790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github header-social-icons github-icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/juan-carlos-duran-solorzano-132120152/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin header-social-icons linkedin-icon"></i>
            </a>
            <a
              href="https://www.instagram.com/photo_walk_worldwide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram header-social-icons insta-icon"></i>
            </a>
          </div>
          {/* <br /> A showcase of my live as a developer, here you will find a
            collection of all my experience, projects and achievements to date.{" "} */}
        </div>
        <div id="astronaut" className="astro">
          <img src={astronout} alt="astro" className="astro-img" />
        </div>
        <div style={{ background: "none" }}>
          <Particles
            id="tsparticles"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              // height: "200px",
              maxHeight: "70vh",
            }}
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 2000,
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
                    sync: false,
                  },
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#c8c8c8",
                  opacity: 0.1,
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
                    enable: true,
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
                    mode: "repulse",
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
                    size: 2,
                    duration: 1,
                    opacity: 2,
                    speed: 6,
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
    </Jumbotron>
  );
};

export default Header;
