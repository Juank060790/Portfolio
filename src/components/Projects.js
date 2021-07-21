import React from "react";
import { Card, Col, Container, Spinner, Row } from "react-bootstrap";
import { useState } from "react";
import "../App.css";
import { projectsDemo } from "../projects.constants";

import projectTags from "./tags";

export default function Projects() {
  // eslint-disable-next-line
  let [projects, setProjects] = useState(projectsDemo);

  if (projects.length === 0) {
    return (
      <Spinner
        animation="grow"
        variant="warning"
        style={{ marginLeft: "50%" }}
      />
    );
  }

  return (
    <Container id="projects">
      <div style={{ margin: "2rem" }}>
        <h1
          className="projectTitle"
          style={{ margin: "auto", textAlign: "center" }}
        >
          Projects
        </h1>
      </div>
      <Row className="d-flex justify-content-center ">
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
                      <div className="button_slide slide_down">Try me!</div>
                    </div>
                  </a>{" "}
                </div>
                <div></div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
