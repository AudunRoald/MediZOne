import {
  faCircleCheck,
  faClock,
  faGlobe,
  faHandshakeAngle,
  faMedal,
  faPiggyBank,
  faReplyAll,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import KeyService from "./components/KeyService";

const Key_services = () => {
  return (
    <section className="keyServices-container">
      <h2 className="keyServices-container_title">key services</h2>
      <div>
        <div className="keyServices-container_items">
          <KeyService
            containerClass="keyServices-container_item"
            icon={faCircleCheck}
            iconClass="keyServices-container_item-icon"
            text="Dyktige fagfolk"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faReplyAll}
            iconClass="keyServices-container_item-icon"
            text="Raskt svar"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faGlobe}
            iconClass="keyServices-container_item-icon"
            text="Overholdelse av ISO-standarder"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faClock}
            iconClass="keyServices-container_item-icon"
            text="Låneutstyr under reparasjonstid"
            textClass="keyServices-container_item-text"
          />
        </div>
        <div className="keyServices-container_items">
          <KeyService
            containerClass="keyServices-container_item"
            icon={faUsers}
            iconClass="keyServices-container_item-icon"
            text="Brukervennlig"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faMedal}
            iconClass="keyServices-container_item-icon"
            text="3-18 måneders garanti"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faHandshakeAngle}
            iconClass="keyServices-container_item-icon"
            text="Teknisk støtte døgnet rundt"
            textClass="keyServices-container_item-text"
          />
          <KeyService
            containerClass="keyServices-container_item"
            icon={faPiggyBank}
            iconClass="keyServices-container_item-icon"
            text="Svært kostnadseffektiv"
            textClass="keyServices-container_item-text"
          />
        </div>
      </div>
    </section>
  );
};

export default Key_services;
