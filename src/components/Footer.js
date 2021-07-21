import React from "react";

import "../App.css";
import { Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div id="footer" className="footer-bg text-white ">
      <Container className="container footer-container">
        <div className="d-flex footerSection">
          <Col lg={6} md={6} sm={8} className="ContactiInfo">
            <h1 className="footer-head rowIcons">Contact</h1>
            <p>
              For more detailed information, do not hesitate to reach me at:
            </p>

            <p className="contact-infor textoverflow">
              {" "}
              <i className="far fa-envelope"></i> juank060790@gmail.com
            </p>
            <p>
              © Copyright{" "}
              <strong className="license">JuanCa-Portfolio 2021</strong>. All
              Rights Reserved
            </p>
          </Col>
          <Col lg={6} md={6} sm={8} className="contact-icons">
            <div className="d-flex contact-wrap-icons">
              <div className="rowIcons">
                <a
                  href="https://www.facebook.com/juancarlos.d.solorzano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook contact-icon fb-icon"></i>
                </a>
                <a
                  href="https://www.instagram.com/photo_walk_worldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram contact-icon insta-icon"></i>
                </a>
              </div>
              <div className="rowIcons">
                <a
                  href="https://www.linkedin.com/in/juan-carlos-duran-solorzano-132120152/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin contact-icon linkedin-icon"></i>
                </a>
                <a
                  href="https://github.com/Juank060790"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github contact-icon github-icon"></i>
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
