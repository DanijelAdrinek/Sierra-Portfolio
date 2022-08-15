import validStar from "../../../assets/icons/star-valid.svg";
import unvalidStar from "../../../assets/icons/star-unvalid.svg";

const Rating = ({ userRating }) => {
    
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if(i < userRating) {
            stars.push(<img src={validStar} className="star" alt='valid star'/>);
        } else {
            stars.push(<img src={unvalidStar} className="star" alt='unvalid star'/>);
        }
    }
    
    return (
        <div className="rating">
            {stars.map(star => {
                return star;
            })}
        </div>
    );
}

export default Rating;