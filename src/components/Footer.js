import React from "react";
import "./style.css";
import "../App.css";
import { Jumbotron, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div id="footer" className="footer-bg text-white">
      <Jumbotron id="education" style={{ background: "none" }}>
        <h1 className="footer-head">Contact</h1>
        <p>
          For more detail information do not hesitate to send me or reach me
          direct on one of these channels
        </p>

        <Container className="container footer-container row-m-auto">
          <div className="contact-lst col-md-6">
            <div className="contact-wrap">
              <div className="call-me">
                <p className="contact-head">
                  <i className="far fa-envelope"></i> Email Me:
                </p>

                <p className="contact-infor">Gmail: juank060790@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-icons col-md-6">
            <div className="contact-wrap-icons">
              <div className="row">
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
              <div className="row">
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
          </div>
        </Container>

        <p>
          © Copyright <strong className="license">JuanCa-Portfolio 2020</strong>
          . All Rights Reserve
        </p>
      </Jumbotron>
    </div>
  );
};

export default Footer;
