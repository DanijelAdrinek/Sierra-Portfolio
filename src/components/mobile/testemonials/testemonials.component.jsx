import "./testemonials.styles.scss";

import testemonialsPic from "../../../assets/images/testemonials pic.jpeg"

import Rating from "../rating/rating.component";

const Testemonials = () => {
    return (
        <section className="section testemonials-container-parent">
        <h1 className="title">Testemonials</h1>
          <div className="testemonials-container">
            <div className="testemonials">
              <div className="cover">
              <div className="text-container">
                <div className="quotation-mark-decoration-small">❛</div>
                <div className="quotation-mark-decoration-big">❛</div>

                  <p>Working with Sierra was a great experience that I recommend to any fashion employer!</p>

                <div className="quotation-mark-decoration-big bottom">❜</div>
                <div className="quotation-mark-decoration-small bottom">❜</div>
                </div>

                <div className="img-and-rating-container">
                  <div className="img-container">
                    <img src={testemonialsPic} alt="pic of Nicole" />
                  </div>

                  <p className="author">Nicole Asher</p>
                  <Rating userRating={4} />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Testemonials;