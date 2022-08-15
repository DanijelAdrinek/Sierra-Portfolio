import "./brkief-introduction.styles.scss";

import beachImage from "../../../assets/images/Sierra_beach.jpg";
import sittingImage from "../../../assets/images/Sierra_sitting.jpg";

import Button from "../../common/button/button.component";

const BriefIntroductionMobile = () => {
    return (
        <section className="section brief-introduction">
            <div className="card">
              <p class="text-paragraph">I've always dremt of becoming a professional model, and ever since I was a child, I was very passionate about keeping <br/> fit and looking good</p>
              <div className="decoration-element">
                <div className="img-container">
                  <img src={beachImage} alt="Sierra at the beach" />
                </div>
                <div className="button-container">
                  <Button>Gallery -&gt;</Button>   
                </div>
              </div>

            </div>

            <div className="card">
              <p class="text-paragraph">
                I've always dremt of becoming a professional model, and ever since I was a child, I was very passionate about keeping <br/> fit and looking good
              </p>
              <div className="decoration-element">
                <div className="img-container">
                  <img src={sittingImage} alt="Sierra sitting in a chair" />
                </div>
                <div className="button-container">
                  <Button>About Me -&gt;</Button>
                </div>
              </div>

            </div>
        </section>
    )
}

export default BriefIntroductionMobile;