import MediZOneLogo from "../../../assets/medizone_healthcare_logo.png";
import Styles from "../home.module.css";

const TextBlockMedizone = () => {
  return (
    <div className="textblock_container">
      <div className="textblock_container_title">
        <img
          src={MediZOneLogo}
          alt="medizone logo"
          className="textblock_logo_medizone"
        />
        <h1>Your satisfaction is our motivation</h1>
      </div>
      <div className="textblock_container_text">
        <p>
          Vi er eksklusive distributører i Norge for Unimed Medical Supplies, og
          lagerfører alle deres produkter. Vi garanterer kort leveringstid og 12
          måneder garanti på alle Unimed sine produkter.
        </p>
        <p>
          Unimed Medical Supplies Inc. er en ledende produsent av medisinsk
          utstyr som spesialiserer seg på forsyninger og tilbehør til
          pasientovervåking. I mer enn 20 år har Unimed levert
          kvalitetsprodukter knyttet til EKG-kabler, SpO2-sensor, Temp. sonde,
          NIBP-mansjett, fostersonde osv., Med mer enn 20 000+ produkter, er
          Unimed en industriell benchmark-bedrift. Alle produkter fra unimed er
          CE og FDA gokjent.
        </p>
      </div>
    </div>
  );
};

export default TextBlockMedizone;

{
  /* <div className="textBlockTitleContainer">
        <img
          src="https://www.unimed.cn/cdn/shop/files/Logo_200x.png?v=1617256307"
          alt="unimed medical supplies logo"
          className="logoUnimed"
        />
        <h1 className="textBlockTitle">Unimed Medical Supplies</h1>
      </div> */
}
