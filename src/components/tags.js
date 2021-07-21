import React from "react";
import reactlogo from "../img/logo192.png";
import logohtml from "../img/html5logo.svg";
import logocss from "../img/css3-alt-brands.svg";
import logonode from "../img/node-brands.svg";
import logojs from "../img/js-brands.svg";
import logowp from "../img/wordpress-simple-brands.svg";
import mongodb from "../img/mongodb.png";
import firebaselogo from "../img/firebase_logo.png";

export const projectTags = (tag) => {
  if (tag === "JS") {
    return (
      <img
        src={logojs}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "MogoDB") {
    return (
      <img
        src={mongodb}
        key={tag}
        style={{ width: "40px", height: "40px", margin: "5px" }}
        alt=""
      ></img>
    );
  } else if (tag === "NodeJs") {
    return (
      <img
        src={logonode}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "Reactjs") {
    return (
      <img
        src={reactlogo}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "CSS") {
    return (
      <img
        src={logocss}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "HTML") {
    return (
      <img
        src={logohtml}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "Wordpress") {
    return (
      <img
        src={logowp}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  } else if (tag === "Firebase") {
    return (
      <img
        src={firebaselogo}
        key={tag}
        style={{ width: "40px", margin: "5px", color: "black" }}
        alt=""
      ></img>
    );
  }
};

export default projectTags;
