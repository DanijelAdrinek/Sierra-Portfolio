import Intro from "../../common/intro/intro.component";
import BriefIntroduction from "../brief-introduction/brief-introduction.component";
import Testimonials from "../testimonials/testimonials.component";

import "./home-desktop.styles.scss";


const HomeDesktop = () => {
  return (
    <div className="desktop">
      <Intro />
      <BriefIntroduction />
      <Testimonials />
    </div>
  );
}

export default HomeDesktop;