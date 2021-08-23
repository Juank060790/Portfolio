import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useState, useRef } from "react";
import "../App.css";
import { projectsDemo } from "../projects.constants";
import divisor from "../images/ShapesDivider.svg";
import projectTags from "./tags";
import paperplane from "../images/paperplane-red.png";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, gsap);

export default function Projects() {
  // eslint-disable-next-line
  let [projects, setProjects] = useState(projectsDemo);
  let paperPlane = useRef("paperPlane");
  let paperPlaneAnimation = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    var tween = gsap.timeline();
    var plane = tween.to(paperPlane.current, {
      duration: 4,
      ease: "power1.inOut",
      motionPath: {
        path: [
          { x: window.innerWidth / 8, y: -20 },
          { x: (window.innerWidth / 8) * 2, y: 10 },
          { x: (window.innerWidth / 8) * 3, y: 100 },
          { x: (window.innerWidth / 8) * 4, y: -100 },
          { x: (window.innerWidth / 8) * 3, y: -50 },
          { x: (window.innerWidth / 8) * 5, y: -30 },
          { x: (window.innerWidth / 8) * 6, y: -20 },
          { x: window.innerWidth + 150, y: 100 },
        ],
        autoRotate: true,
        // curviness: 1.5,
      },
    });

    console.log(`plane`, plane);

    const controller = new ScrollMagic.Controller();
    console.log(`controller`, controller);
    const scene = new ScrollMagic.Scene({
      triggerElement: ".animation",
      duration: 3000,
      triggerHook: 0.1,
    })
      .setTween(tween)
      .setPin(".animation", { pushFollowers: false })
      .addTo(controller);

    console.log(`scene`, scene);
  }, [paperPlane]);

  return (
    <>
      <Container fluid className="animation" ref={paperPlaneAnimation}>
        <img
          src={paperplane}
          alt="plane"
          ref={paperPlane}
          className="paper-plane"
        />
      </Container>
      <div className="custom-shape-divider-bottom-1629436742">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="custom-shape-divider-top-1629437491">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <Container fluid id="projects">
        <div style={{ margin: "2rem" }}>
          <h1
            className="projectTitle"
            style={{ margin: "auto", textAlign: "center" }}
          >
            Experience
          </h1>
        </div>
        {projects.map((item) => {
          return (
            <div key={item.id}>
              {item.id % 2 === 0 ? (
                <Container className="container-card">
                  <img
                    className="project-image"
                    src={item.img}
                    alt="project"
                    width="100%"
                  />

                  <img className="divisor" src={divisor} alt="divisor" />

                  <div className="project-text">
                    <h2>{item.title}</h2>
                    <p className="project-text project-paragraph">
                      {item.description}
                      <br />
                      {item.tags.map((tag) => {
                        return projectTags(tag);
                      })}
                    </p>
                    <a href={item.link} target="_new">
                      <div id="outer">
                        <div className="button_slide slide_down">
                          {item.status ? item.status : "Try me"}!
                        </div>
                      </div>
                    </a>{" "}
                  </div>
                </Container>
              ) : (
                <Container className="container-card">
                  <div className="project-text">
                    <h2>{item.title}</h2>
                    <p className="project-text project-paragraph">
                      {item.description}
                      <br />
                      {item.tags.map((tag) => {
                        return projectTags(tag);
                      })}
                    </p>
                    <a href={item.link} target="_new">
                      <div id="outer">
                        <div className="button_slide slide_down">
                          {item.status ? item.status : "Try me"}!
                        </div>
                      </div>
                    </a>{" "}
                  </div>

                  <img className="divisor" src={divisor} alt="divisor" />
                  <img
                    className="project-image"
                    src={item.img}
                    alt="project"
                    width="100%"
                  />
                </Container>
              )}
            </div>
          );
        })}

        {/* <Row className="d-flex justify-content-center ">
          {projects.map((item) => {
            return (
              <Col
                key={item.id}
                className="projectCard text-center d-flex"
                lg={4}
                md={6}
                xs={10}
                sm={6}
              >
                <Card
                  style={{
                    width: "20rem",
                    height: "auto",
                    marginBottom: "3rem",
                  }}
                  className=" projectsCol"
                >
                  <Card.Img
                    variant="top"
                    title={item.title}
                    src={item.img}
                    style={{ borderRadius: "5px", height: "auto" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <div className="mt-auto paddingButton">
                    <div md={12} style={{ textAlign: "center" }}>
                      {item.tags.map((tag) => {
                        return projectTags(tag);
                      })}
                    </div>
                    <a href={item.link} target="_new">
                      <div id="outer">
                        <div className="button_slide slide_down">
                          {item.status ? item.status : "Try me"}!
                        </div>
                      </div>
                    </a>{" "}
                  </div>
                  <div></div>
                </Card>
              </Col>
            );
          })}
        </Row> */}
      </Container>
    </>
  );
}
