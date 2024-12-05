import RigidScopeRepairImage from "../../assets/rigid_scopes.jpg";

const RigidScopeRepair = () => {
  return (
    <>
      <Header />
      <main>
        <div className={Styles.repair_page_title_container}>
          <h1>Reparasjon av Rigidskop</h1>
          <img
            src={RigidScopeRepairImage}
            alt="logoTextBlock"
            className={Styles.repair_page_title_image}
          />
        </div>
        <RepairInfo />
        <div className={Styles.repair_page_info_container}>
          <h2>Kostnadseffektiv Reparasjonstjeneste</h2>
          <p>
            Når reparasjonen av din rigid endoskop er fullført, kan du være
            trygg på at den gjensettes til sin opprinnelige tilstand. Dette er
            tilfellet for autoklaverbare og lasersveisede endoskoper. Vi følger
            OEM-standarder og bruker utstyr fra Tyskland for å sikre optimal
            servicekvalitet. Teamet vårt og våre partnere gjenoppbygger skoper
            fra bunnen av, noe som sparer unødvendige re-reparasjoner i
            etterkant.
          </p>
        </div>
      </main>
    </>
  );
};

export default RigidScopeRepair;
