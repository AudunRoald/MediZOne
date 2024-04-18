import Header from "../../components/layout/header/Header";
import NavigationLink from "../../components/layout/navigation/components/NavigationLink";
import "./Home.css";
import HomePageTextBlock_1 from "./components/HomePageTextBlock_1";
import HomePageTextBlock from "./components/HomePageTextBlock_1";
import HomePageTextBlock_2 from "./components/HomePageTextBlock_2";

const Home = () => {
  return (
    <>
      <Header />
      <main className="homePage">
        <section className="homePageTitleBlock">
          <div className="homePageTitle">
            <h1>Medical equipment & consumables</h1>
            <h2>Your satisfaction is our motivation</h2>
            <button to="/products" className="button buttonSuccess">
              view our products
            </button>
          </div>
        </section>
        <section>
          <HomePageTextBlock_1 />
          <HomePageTextBlock_2 />
        </section>
      </main>
    </>
  );
};

export default Home;

{
  /*  <>

  NORSK TEKST

      <Header />
      <main>
        <div className="homePageTitle">
          <h1>Medsinsk utstyr & forbruksmateriell</h1>
          <h2>Eksklusiv distributør i Norge for Unimed Medical supplies</h2>
        </div>
                {/* <img
          src={HomePageBackgroundImage}
          alt="medical-banner-with-doctor-wearing-face-mask"
          className="backgroundImage"
        /> 
      </main>
    </> 
  */
}
