import "./home-mobile.styles.scss";

import Intro from "../../common/intro/intro.component";
import BriefIntroductionMobile from "../brief-introduction/brief-introduction.component";
import Testimonials from "../testimonials/testimonials.component";

const HomeMobile = () => {
    return (
      <div className="mobile">
        <Intro />
        <BriefIntroductionMobile />
        <section className="section achievements"></section>
        <Testimonials />
      </div>
    );
}

export default HomeMobile;