import Intro from "../../common/intro/intro.component";
import BriefIntroduction from "../brief-introduction/brief-introduction.component";

import "./home-desktop.styles.scss";

const HomeDesktop = () => {
    return (
      <div className="desktop">
        <Intro />
        <BriefIntroduction />
        <section className="section testemonials-container-parent">
          <div className="testemonials-container">
            <h1 className="title">Testemonials</h1>
            <div className="testemonials">
              <div className="cover">
                {/* <div className="quotation-mark-decoration-big">❛</div> */}
                {/* <div className="quotation-mark-decoration-small">❛</div> */}
                <div className="text-container">
                  <p></p>
                </div>


                {/* <div className="quotation-mark-decoration-big">❛</div> */}
                {/* <div className="quotation-mark-decoration-small">❛</div> */}

                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default HomeDesktop;