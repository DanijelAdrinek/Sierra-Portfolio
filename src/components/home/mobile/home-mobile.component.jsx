import "./home-mobile.styles.scss";
import beachImage from "../../../assets/images/Sierra_beach.jpg";
import sittingImage from "../../../assets/images/Sierra_sitting.jpg";
import Button from "../../../components/button/button.component";

const HomeMobile = () => {
    return (
        <div className="mobile">
            <section className="section intro">
            <h1 className="main-title">Hello and Welcome</h1>
            <h2 className="intro-title">My Name is Sierra, and I live in <nobr>Ontario - Canada</nobr></h2>
            </section>
            <section className="section content">
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
    </div>
    );
}

export default HomeMobile;