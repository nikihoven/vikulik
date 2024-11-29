import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Rating = ({ rating, totalStars = 5 }) => {
    const stars = Array.from(totalStars).map((_, index) => {
      let resultClassName = 'bi bi-star-fill'
      let resultColor = '#ffc107'

      if (index < Math.floor(rating)) {
        resultClassName = 'bi bi-star-fill'
        resultColor = '#ffc107'
      } else if (index < rating) {
        resultClassName = 'bi bi-star-half'
        resultColor = '#ffc107'
      } else {

        resultClassName = 'bi bi-star'
        resultColor = '#e4e5e9'
      }

        return (
            <i
            key={index}
            className={resultClassName}
            style={{ color: resultColor }}
            />
        );
    });

    return <div>{stars}</div>;
  };

  export default Rating;
