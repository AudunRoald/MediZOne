import Header from "../../components/layout/header/Header";
import { Link } from "react-router-dom";
import TextBlockUnimed from "./components/TextBlockUnimed";
import TextBlockMedizone from "./components/TextBlockMedizone";
import Button from "../../components/buttons/Button";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero-wrapper hero-wrapper_home-page">
          <div className="hero-title_wrapper">
            <div className="hero-titles_wrapper">
              <h1 className="hero-titles_main-title">
                Medical equipment & consumables
              </h1>
              <h2 className="hero-titles_second-title">
                Your satisfaction is our motivation
              </h2>
            </div>
            <Button
              buttonText="view our products"
              buttonClass="button button_call-to-action"
              to="/products"
            />
          </div>
        </section>

        <section className="text-blocks_home-page">
          <TextBlockMedizone />
          <TextBlockUnimed />
        </section>
      </main>
    </>
  );
};

export default Home;
