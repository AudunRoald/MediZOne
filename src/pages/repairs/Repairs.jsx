import React from "react";
import RepairInfo from "./components/RepairInfo";
import RigidScopeRepairImage from "../../assets/rigid_scopes.jpg";
import Header from "../../components/layout/header/Header";

const Repairs = () => {
  return (
    <>
      <Header />
      <main>
        <div className="repair-page_title-container">
          <h1>Reparasjon av Rigidskop</h1>
        </div>
        <RepairInfo />
        <div>
          <div className="repair-page_text-container">
            <h2 className="repair-page_text-title">
              Kostnadseffektiv Reparasjonstjeneste
            </h2>
            <p className="repair-page_text">
              Når reparasjonen av din rigid endoskop er fullført, kan du være
              trygg på at den gjensettes til sin opprinnelige tilstand. Dette er
              tilfellet for autoklaverbare og lasersveisede endoskoper. Vi
              følger OEM-standarder og bruker utstyr fra Tyskland for å sikre
              optimal servicekvalitet. Teamet vårt og våre partnere
              gjenoppbygger skoper fra bunnen av, noe som sparer unødvendige
              re-reparasjoner i etterkant.
            </p>
          </div>
          <img
            src={RigidScopeRepairImage}
            alt="logoTextBlock"
            className="repair-page_title-image"
          />
        </div>
      </main>
    </>
  );
};

export default Repairs;
