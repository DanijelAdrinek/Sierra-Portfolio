import "./brief-introduction.scss";

import beachImage from "../../assets/images/Sierra_beach.jpg";
import sittingImage from "../../assets/images/Sierra_sitting.jpg";
import Button from "../../components/button/button.component";

const BriefIntroduction = () => {
    return (
        <section className="section brief-introduction">
        <div className="text-content text-content-left" style={{'--order': 1}}>
            <p class="text-paragraph">I've always dremt of becoming a professional model, and ever since I was a child, I was very passionate about keeping  fit and <br/> looking good</p>
            <div className="button-container">
                <Button>Gallery -&gt;</Button>
            </div>
        </div>
          <div className="decoration-element right" style={{'--order': 2}}>
            <div className="img-container">
              <img src={beachImage} alt="Sierra at the beach" />
            </div>
          </div>

          <div className="decoration-element left" style={{'--order': 3}}>
            <div className="img-container">
              <img src={sittingImage} alt="Sierra sitting in a chair" />
            </div>
          </div>

          <div className="text-content text-content-right" style={{'--order': 4}}>
        <p class="text-paragraph">
            I've always dremt of becoming a professional model, and ever since I was a child, I was very passionate about keeping  fit and <br/> looking good
        </p>
        <div className="button-container">
          <Button>About Me -&gt;</Button>
        </div>
    </div>

    <div className="placeholder"></div>
    </section>
        );
};

export default BriefIntroduction;