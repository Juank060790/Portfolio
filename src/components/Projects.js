import React from "react";
import {
  Card,
  Col,
  Button,
  Modal,
  Container,
  Spinner,
  Row,
} from "react-bootstrap";
import { useState } from "react";

import { projectsDemo } from "../projects.constants";

export default function Projects() {
  // eslint-disable-next-line
  let [projects, setProjects] = useState(projectsDemo);
  let [projectSelected, setProjectSelected] = useState(null);
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let showModal = (item) => {
    setProjectSelected(item);
    setShow(true);
  };

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
    <Container id="projects" style={{ minHeight: "100vh" }}>
      <h1 style={{ margin: "3rem", textAlign: "center", fontSize: "64px" }}>
        Projects
      </h1>
      <Row
        className="d-flex justify-content-center "
        style={{ textAlign: "center", margin: "auto" }}
      >
        {projects.map((item) => {
          return (
            <Col className="text-center d-flex" md={4} xs={12}>
              <Card
                className="cardOnHover"
                style={{
                  width: "20rem",
                  height: 650,
                  backgroundColor: "rgba(21, 21, 21, 0.933)",
                  marginBottom: "20px",
                }}
              >
                <Card.Img
                  variant="top"
                  title={item.title}
                  src={item.img}
                  style={{ borderRadius: "15px", height: 250 }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Button
                  variant="warning"
                  onClick={(e) => showModal(item)}
                  className="mouse-hover"
                  style={{ width: "30%", margin: "auto" }}
                >
                  Try me!
                </Button>
                <Card.Body>
                  {" "}
                  <Col md={12} style={{ textAlign: "center" }}>
                    {item.tags.map((tag) => {
                      return (
                        <span
                          key={tag}
                          className="badge badge-warning "
                          style={{ margin: "5px" }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        <Modal size="xl" show={show} onHide={handleClose}>
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
        </Modal>{" "}
      </Row>
    </Container>
  );
}
