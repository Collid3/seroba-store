import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ product }) => {
  return (
    <p>
      <FontAwesomeIcon
        icon={product.rating.rate === 0.5 ? faStarHalfAlt : faStar}
        style={{
          color: product.rating.rate >= 0.5 ? "orange" : "gray",
        }}
      />
      <FontAwesomeIcon
        icon={product.rating.rate === 1.5 ? faStarHalfAlt : faStar}
        style={{
          color: product.rating.rate >= 1.5 ? "orange" : "gray",
        }}
      />
      <FontAwesomeIcon
        icon={product.rating.rate === 2.5 ? faStarHalfAlt : faStar}
        style={{
          color: product.rating.rate >= 2.5 ? "orange" : "gray",
        }}
      />
      <FontAwesomeIcon
        icon={product.rating.rate === 3.5 ? faStarHalfAlt : faStar}
        style={{
          color: product.rating.rate >= 3.5 ? "orange" : "gray",
        }}
      />
      <FontAwesomeIcon
        icon={product.rating.rate === 4.5 ? faStarHalfAlt : faStar}
        style={{
          color: product.rating.rate >= 4.5 ? "orange" : "gray",
        }}
      />
      <span className="reviews-count"> {product.rating.count} reviews</span>
    </p>
  );
};

export default Reviews;
