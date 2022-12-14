import "./home.styles.scss";

import useWindowDimensions from "../../helpers/getWindowSize/get-window-size";

import HomeMobile from "../../components/mobile/home/home-mobile.component";
import HomeDesktop from "../../components/desktop/home/home-desktop.component";

const Home = () => {
  const { width } = useWindowDimensions();
  console.log(width);
  const isMobile = (width < 800);

    return (
      <div className="home">
        { isMobile ? <HomeMobile /> : <HomeDesktop /> }
      </div>
    );

}

export default Home;