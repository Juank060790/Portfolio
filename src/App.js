import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavbarTop from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Clients from "./components/Clients/Clients";
library.add(fas);

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Header />
      <Projects />
      <Clients />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
