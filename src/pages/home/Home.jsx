import Header from "../../components/layout/header/Header";
import Styles from "./home.module.css";
import TextBlockMedizone from "./components/TextBlockMedizone";
import TextBlockUnimed from "./components/TextBlockUnimed";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="hero_container home_hero_container">
          <div className="home_hero_title">
            <h1>Medical equipment & consumables</h1>
            <h2>Your satisfaction is our motivation</h2>
            <NavLink to="/products" className="button buttonHomeTitle">
              view our products
            </NavLink>
          </div>
        </div>
        <section className="home_section_textblocks">
          <TextBlockMedizone />
          <TextBlockUnimed />
        </section>
      </main>
    </>
  );
};

export default Home;
