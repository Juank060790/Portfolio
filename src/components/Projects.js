import React from "react";
import {
  Card,
  Col,
  Button,
  // Modal,
  Container,
  Spinner,
  Row,
} from "react-bootstrap";
import { useState } from "react";

import { projectsDemo } from "../projects.constants";

export default function Projects() {
  // eslint-disable-next-line
  let [projects, setProjects] = useState(projectsDemo);
  // let [projectSelected, setProjectSelected] = useState(null);
  // let [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  // let showModal = (item) => {
  //   setProjectSelected(item);
  //   setShow(true);
  // };

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
      <Row
        className="d-flex justify-content-center "
        // style={{ textAlign: "center", margin: "auto" }}
      >
        {projects.map((item) => {
          return (
            <Col
              className="projectCard text-center d-flex"
              lg={4}
              md={6}
              xs={12}
              sm={6}
            >
              <Card
                className="cardOnHover projectsCol"
                style={{
                  width: "20rem",
                  height: "auto",
                  backgroundColor: "rgba(21, 21, 21, 0.933)",
                  marginBottom: "3rem",
                }}
              >
                <Card.Img
                  variant="top"
                  title={item.title}
                  src={item.img}
                  style={{ borderRadius: "15px", height: 230 }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <div className="mt-auto paddingButton">
                  <div md={12} style={{ textAlign: "center" }}>
                    {item.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="badge badge-success "
                          style={{ margin: "5px", color: "black" }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <a href={item.link} target="_new">
                    <Button
                      variant="warning"
                      className="mouse-hover m-2"
                      style={{ width: "40%", margin: "auto" }}
                    >
                      Try me!
                    </Button>
                  </a>{" "}
                </div>
              </Card>
            </Col>
          );
        })}
        {/* <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {projectSelected && projectSelected.title}
            </Modal.Title>
          </Modal.Header>
          <iframe
            height="600"
            title="video"
            class="embed-responsive-item"
            src={projectSelected && projectSelected.link}
            allowFullScreen
          >
            {" "}
          </iframe>
        </Modal>{" "} */}
      </Row>
    </Container>
  );
}
