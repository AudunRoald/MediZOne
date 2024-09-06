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

const KeyServices_HomePage = () => {
  return (
    <div className="key-services_container__home-page">
      <KeyService
        containerClass="keyServices-container_item"
        icon={faGlobe}
        iconClass="keyServices-container_item-icon__home-page"
        text="Overholdelse av ISO-standarder"
        textClass="keyServices-container_item-text__home-page"
      />
      <KeyService
        containerClass="keyServices-container_item"
        icon={faClock}
        iconClass="keyServices-container_item-icon__home-page"
        text="Låneutstyr under reparasjonstid"
        textClass="keyServices-container_item-text__home-page"
      />

      <KeyService
        containerClass="keyServices-container_item"
        icon={faMedal}
        iconClass="keyServices-container_item-icon__home-page"
        text="3-18 måneders garanti"
        textClass="keyServices-container_item-text__home-page"
      />

      <KeyService
        containerClass="keyServices-container_item"
        icon={faPiggyBank}
        iconClass="keyServices-container_item-icon__home-page"
        text="Svært kostnadseffektiv"
        textClass="keyServices-container_item-text__home-page"
      />
    </div>
  );
};

export default KeyServices_HomePage;
