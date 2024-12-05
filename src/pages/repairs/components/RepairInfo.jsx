import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RepairInfo = () => {
  return (
    <div className="repair-info_container">
      <FontAwesomeIcon icon={faInfoCircle} className="repair-info_icon" />
      <div className="repair-info_text">
        <p>
          Reparasjoner for nesten alle produsenter, inkludert Olympus®,
          Pentax®, Fujinon®, ACMI®, K. Storz®, R. Wolf®, Welch Allyn® og
          Machida®
        </p>
        {/*  <p>
          Endoskoper med liten diameter: Bronkoskoper, cystoskoper,
          intubasjonskoper, koledokoskoper, ureteroskoper og rhinolaryngoskoper
        </p>
        <p>
          Endoskoper med stor diameter: Koloskoper, Gastroskop, Duodenoskoper
          (ERCP), Sigmoidoskoper og Enteroskoper
        </p> */}
      </div>
    </div>
  );
};

export default RepairInfo;
