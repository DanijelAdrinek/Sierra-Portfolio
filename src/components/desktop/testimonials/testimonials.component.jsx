import "./testimonials.styles.scss";

import testemonialsPic from "../../../assets/images/testemonials pic.jpeg";

import Rating from "../../common/rating/rating.component";


const Testimonials = () => {
    return (
        <section className="section testemonials-section">
        <div className="testemonials">
          <div className="decoration"></div>
          <h1 className="title">Testimonials</h1>
          <div className="content-container">
            <div className="text-and-rating-container">


              <div className="text">
                <div className="quotation-mark-decoration-small">❛</div>
                <div className="quotation-mark-decoration-big">❛</div>
                  Working with Sierra was a great experience that I recommend to any fashion employer! Working with Sierra was a great experience that I recommend to any fashion employer!
                <div className="quotation-mark-decoration-big bottom">❜</div>
                <div className="quotation-mark-decoration-small bottom">❜</div>
                </div>
                
                <Rating userRating={5}/>
                
              </div>

            <div className="img-container">
              <img src={testemonialsPic} alt="person that said the testemonial" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimonials