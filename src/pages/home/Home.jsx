import Header from "../../components/layout/header/Header";
import "../../css/home.css";
import HomeHero from "./components/HomeHero";
import HomeTextBlocks from "./components/HometextBlocks";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeTextBlocks />
      </main>
    </>
  );
};

export default Home;
