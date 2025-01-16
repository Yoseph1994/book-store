import Recomended from "../../components/Recomended";
import TopSellers from "../../components/TopSellers";
import Banner from "./Banner";
import News from "../../components/News";

function Home() {
  return (
    <div>
      <Banner />
      <TopSellers />
      <Recomended />
      <News />
    </div>
  );
}

export default Home;
