import React from "react";
import karmaLogo from "../../img/KarmaLogo.png";
import GardenHouse from "../../img/gardenhouseLogo.png";
import "./Clients.css";

const ClientCard = (props) => {
  const { clientLink, logo } = props;
  return (
    <div className="client-card">
      <a href={clientLink} target="_new">
        <img width={250} src={logo} alt="client logo" />
      </a>
    </div>
  );
};

const Clients = () => {
  return (
    <div className="container clients-container">
      <h3 className="projectTitle">Clients </h3>
      <div className="container d-flex clients-container">
        <ClientCard logo={karmaLogo} clientLink="https://www.karmavn.com/" />
        <ClientCard
          logo={GardenHouse}
          clientLink="https://gardenhousemx.com/"
        />
      </div>
    </div>
  );
};

export default Clients;
