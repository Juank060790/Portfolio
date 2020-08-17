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
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const apiAddress = process.env.REACT_APP_SERVER_URL;

export default function Projects() {
  let [app, setApp] = useState([]);
  let [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let getDetailData = async () => {
    let url = apiAddress;
    let response = await fetch(url);
    let result = await response.json();
    setApp(result);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  if (app.length === 0) {
    return (
      <Spinner
        animation="grow"
        variant="warning"
        style={{ marginLeft: "50%" }}
      />
    );
  }

  return (
    <Container className="d-flex">
      {app.map((item) => {
        return (
          <Col md={4}>
            <Card
              style={{
                width: "18rem",
                height: 650,
                backgroundColor: "rgba(21, 21, 21, 0.933)",
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
                onClick={handleShow}
                className="mouse-hover"
                style={{ width: "30%", margin: "auto" }}
              >
                Try me!
              </Button>
              <Card.Body>
                {" "}
                <Col className="text-center">
                  <Row></Row>
                  {item.tags.map((tag) => {
                    return (
                      <span
                        class="badge badge-warning"
                        style={{ margin: "5px" }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </Col>
              </Card.Body>
              <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <iframe
                  height="600"
                  title="video"
                  class="embed-responsive-item"
                  src={item.link}
                  allowFullScreen
                >
                  {" "}
                </iframe>
              </Modal>{" "}
            </Card>
          </Col>
        );
      })}
    </Container>
  );
}
