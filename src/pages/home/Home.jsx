import Header from "../../components/layout/header/Header";
import Styles from "./home.module.css";
import TextBlockMedizone from "./components/TextBlockMedizone";
import TextBlockUnimed from "./components/TextBlockUnimed";

const Home = () => {
  return (
    <>
      <Header />
      <main className={Styles.homePage}>
        <div className={Styles.homePageTitleBlock}>
          <div className={Styles.homePageTitle}>
            <h1>Medical equipment & consumables</h1>
            <h2>Your satisfaction is our motivation</h2>
            <button to="/products" className="button buttonHomeTitle">
              view our products
            </button>
          </div>
        </div>
        <section className="textBlocks">
          <TextBlockMedizone />
          <TextBlockUnimed />
        </section>
      </main>
    </>
  );
};

export default Home;
