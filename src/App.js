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

      <Projects />
      <Education />
    </div>
  );
}

export default App;
