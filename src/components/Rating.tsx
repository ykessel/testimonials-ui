import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { RatingType } from "../types/RatingType";

const Rating = ({ ratingColor }: RatingType) => {
  return (
    <span
      className={
        "flex items-center justify-center p-3 w-5 h-5 rounded " + ratingColor
      }
    >
      <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
    </span>
  );
};

export default Rating;
