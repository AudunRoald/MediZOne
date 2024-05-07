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
        <div className={Styles.page_title_container}>
          <div className={Styles.page_title}>
            <h1>Medical equipment & consumables</h1>
            <h2>Your satisfaction is our motivation</h2>
            <NavLink to="/products" className="button buttonHomeTitle">
              view our products
            </NavLink>
          </div>
        </div>
        <section className="text_blocks_container">
          <TextBlockMedizone />
          <TextBlockUnimed />
        </section>
      </main>
    </>
  );
};

export default Home;
