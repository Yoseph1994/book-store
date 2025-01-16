import Recomended from "../../components/Recomended";
import TopSellers from "../../components/TopSellers";

import News from "../../components/News";
import Banner from "../../components/Banner";

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
