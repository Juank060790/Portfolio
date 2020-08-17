import React from "react";
import { Jumbotron, Col, Container } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeInRightBig, fadeInLeftBig } from "react-animations";

import "../App.css";

export default function Education() {
  const Bounce = styled.div`
    animation: 5s ${keyframes`${fadeInRightBig}`};
  `;
  const BounceLeft = styled.div`
    animation: 5s ${keyframes`${fadeInLeftBig}`};
  `;

  return (
    <Jumbotron style={{ background: "none" }}>
      <Container className="d-flex ">
        <Col lg={7}>
          <h3>Who am I?</h3>
          <Bounce>
            <p>
              A creative enthusiast who enjoys new challenges, always looking to
              improve and learn different skills in differetn fields. Currently
              developing, growing and getting experience in the field of full
              stack developer. Right now with the experience I have earnt over
              the years working for big, startups and own projects I can mix
              them with my passion that is coding.
            </p>
            <img
              src="https://i1.wp.com/juancaphotography.com/wp-content/uploads/2019/08/DSC04819-Editar.jpg?resize=768%2C512&ssl=1"
              alt="portrait"
              width="350px"
              className="profileImg"
            />
          </Bounce>
        </Col>
        <Col lg={5} style={{ marginTop: "10rem", textAlign: "end" }}>
          <BounceLeft>
            <h1>Education</h1>
            <ol>CooderSchool Full stack Bootcamp</ol>
            <ol>Customer service and leadership course</ol>{" "}
            <ol>Security Awareness training</ol>
            <ol>Personal safety and social Responsibility</ol>
            <ol>Crowd Management Course</ol>{" "}
            <ol>Udemy SEO and google positioning</ol>
            <ol>SoloLearn JavaScript Tutorial</ol>
            <ol>SoloLearn HTML Fundamentals</ol>
            <ol>SoloLearn CSS Fundamentals</ol>
            <ol>Professional photography course (portraits)</ol>
          </BounceLeft>
        </Col>
      </Container>
    </Jumbotron>
  );
}
