import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Header />
      <h1 style={{ margin: "6rem", textAlign: "center", fontSize: "64px" }}>
        Projects
      </h1>
      <Projects />
      <Education />
    </div>
  );
}

export default App;
