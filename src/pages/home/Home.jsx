import Header from "../../components/layout/header/Header";
import "./Home.css";
import HomePageTextBlock_1 from "./components/HomePageTextBlock_1";
import HomePageTextBlock_2 from "./components/HomePageTextBlock_2";

const Home = () => {
  return (
    <>
      <Header />
      <main className="homePage">
        <div className="homePageTitleBlock">
          <div className="homePageTitle">
            <h1>Medical equipment & consumables</h1>
            <h2>Your satisfaction is our motivation</h2>
            <button to="/products" className="button buttonHomeTitle">
              view our products
            </button>
          </div>
        </div>
        <section className="textBlocks">
          <HomePageTextBlock_1 />
          <HomePageTextBlock_2 />
        </section>
      </main>
    </>
  );
};

export default Home;
