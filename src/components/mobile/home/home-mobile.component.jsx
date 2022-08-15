import "./home-mobile.styles.scss";

import Intro from "../../common/intro/intro.component";
import BriefIntroductionMobile from "../brief-introduction/brief-introduction.component";
import Testemonials from "../testemonials/testemonials.component";

const HomeMobile = () => {
    return (
      <div className="mobile">
        <Intro />
        <BriefIntroductionMobile /> 
        <Testemonials />
      </div>
    );
}

export default HomeMobile;