import TextBlockWithImage from "../../../components/text_blocks/TextBlockWithImage";
import MediZOneLogo from "../../../assets/logos/medizone_healthcare_logo.png";
import UnimedLogo from "../../../assets/Logo_200x.avif";

const HomeTextBlocks = () => {
  return (
    <section className="text-blocks_home-page">
      <TextBlockWithImage
        containerClassName="textblock-container"
        titleContainerClassName="textblock-container_title-wrapper"
        image={MediZOneLogo}
        imageClassName="textblock-logo_medizone"
        alt="Medizone company logo"
        title="Your satisfaction is our motivation"
        textClassName="textblock-container_text"
        text_1__Visable={true}
        text_1="Vi er eksklusive distributører i Norge for Unimed Medical Supplies, og
          lagerfører alle deres produkter. Vi garanterer kort leveringstid og 12
          måneder garanti på alle Unimed sine produkter."
        text_2__Visable={true}
        text_2="Unimed Medical Supplies Inc. er en ledende produsent av medisinsk
          utstyr som spesialiserer seg på forsyninger og tilbehør til
          pasientovervåking. I mer enn 20 år har Unimed levert
          kvalitetsprodukter knyttet til EKG-kabler, SpO2-sensor, Temp. sonde,
          NIBP-mansjett, fostersonde osv., Med mer enn 20 000+ produkter, er
          Unimed en industriell benchmark-bedrift. Alle produkter fra unimed er
          CE og FDA gokjent."
      />

      <TextBlockWithImage
        containerClassName="textblock-container"
        titleContainerClassName="textblock-container_title-wrapper"
        image={UnimedLogo}
        imageClassName="textblock-logo_unimed"
        alt="Unimed company logo"
        title="Unimed Medical Supplies"
        textClassName="textblock-container_text"
        buttonClassName="button button_call-to-action"
        button_1__Visable={true}
        buttonText_1="visit unimed medical supplies"
        to_1="https://www.unimed.cn/"
        button_2__Visable={true}
        buttonText_2="open unimed product catalog"
        to_2="https://medizonehealthcare.no/wp-content/uploads/2021/12/1.-Unimed_Product-Catalogue_B1.4_21.07.08p-2.pdf"
      />
    </section>
  );
};

export default HomeTextBlocks;
