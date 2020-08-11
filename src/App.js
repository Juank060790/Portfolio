import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Header />
      <h1>Projects</h1>
      <Container className="d-flex ">
        <Projects />
        <Projects />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
