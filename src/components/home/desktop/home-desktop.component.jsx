
import Intro from "../../intro/intro.component";
import BriefIntroduction from "../../brief-introduction/brief-introduction.component";

import "./home-desktop.styles.scss";

const HomeDesktop = () => {
    return (
      <div className="desktop">
        <Intro />
        <BriefIntroduction />
        <section className="section testemonials-container-parent">
          <div className="testemonials-container">
            <h1 className="testemonials-title">Testemonials</h1>
            <div className="testemonials">
              <p></p>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default HomeDesktop;