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
import Key_service from "./components/Key_service";

const Key_services = () => {
  return (
    <section>
      <h3 className="section_title__inverted">key services</h3>
      <div className="key_services_container">
        <Key_service
          icon={faCircleCheck}
          iconClass="key_service_icon"
          text="Dyktige fagfolk"
          textClass="key_service_text"
        />
        <Key_service
          icon={faReplyAll}
          iconClass="key_service_icon"
          text="Raskt svar"
          textClass="key_service_text"
        />
        <Key_service
          icon={faGlobe}
          iconClass="key_service_icon"
          text="Overholdelse av ISO-standarder"
          textClass="key_service_text"
        />
        <Key_service
          icon={faClock}
          iconClass="key_service_icon"
          text="Låneutstyr under reparasjonstid"
          textClass="key_service_text"
        />
      </div>
      <div className="key_services_container">
        <Key_service
          icon={faUsers}
          iconClass="key_service_icon"
          text="Brukervennlig"
          textClass="key_service_text"
        />
        <Key_service
          icon={faMedal}
          iconClass="key_service_icon"
          text="3-18 måneders garanti"
          textClass="key_service_text"
        />
        <Key_service
          icon={faHandshakeAngle}
          iconClass="key_service_icon"
          text="Teknisk støtte døgnet rundt"
          textClass="key_service_text"
        />
        <Key_service
          icon={faPiggyBank}
          iconClass="key_service_icon"
          text="Svært kostnadseffektiv"
          textClass="key_service_text"
        />
      </div>
    </section>
  );
};

export default Key_services;
