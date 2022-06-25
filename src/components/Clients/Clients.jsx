import React from "react";
import karmaLogo from "../../img/KarmaLogo.png";
import GardenHouse from "../../img/gardenhouseLogo.png";
import FaunaFlora from "../../img/faunaFlora.png";
import "./Clients.css";

const ClientCard = (props) => {
  const { clientLink, logo, width, clientName, className } = props;
  return (
    <div className={`${className} "client-card"`}>
      <a href={clientLink} target="_new">
        <img width={width} src={logo} alt={clientName} />
      </a>
    </div>
  );
};

const Clients = () => {
  return (
    <div className="container clients-container">
      <h3 className="projectTitle">Clients </h3>
      <div className="container d-flex clients-container">
        <ClientCard
          clientName="Karma Logistics"
          width={150}
          logo={karmaLogo}
          clientLink="https://www.karmavn.com/"
        />
        <ClientCard
          className="GardenHouse"
          clientName="GardenHouse"
          width={150}
          logo={GardenHouse}
          clientLink="https://gardenhousemx.com/"
        />
        <ClientCard
          clientName="Fauna and Flora International"
          logo={FaunaFlora}
          width={150}
        />
        {/* <ClientCard clientName="Coderschool" width={150} />
        <ClientCard clientName="Despacho de Arquitectos" width={150} /> */}
      </div>
    </div>
  );
};

export default Clients;
