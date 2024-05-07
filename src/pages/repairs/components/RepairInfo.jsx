import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../repairs.module.css";

const RepairInfo = () => {
  return (
    <div className={Styles.repair_info_container}>
      <FontAwesomeIcon
        icon={faInfoCircle}
        className={Styles.repair_info_icon}
      />
      <div className={Styles.repair_info}>
        <p>
          Reparasjoner for nesten alle produsenter, inkludert Olympus®,
          Pentax®, Fujinon®, ACMI®, K. Storz®, R. Wolf®, Welch Allyn® og
          Machida®
        </p>
        <p>
          Endoskoper med liten diameter: Bronkoskoper, cystoskoper,
          intubasjonskoper, koledokoskoper, ureteroskoper og rhinolaryngoskoper
        </p>
        <p>
          Endoskoper med stor diameter: Koloskoper, Gastroskop, Duodenoskoper
          (ERCP), Sigmoidoskoper og Enteroskoper
        </p>
      </div>
    </div>
  );
};

export default RepairInfo;
