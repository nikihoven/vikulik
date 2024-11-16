import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Rating = ({ rating, totalStars = 5 }) => {
    const stars = Array.from({ length: totalStars }, (_, index) => {
      if (index < Math.floor(rating)) {
        return (
          <i
            key={index}
            className="bi bi-star-fill"
            style={{ color: '#ffc107' }}
          ></i>
        );
      } else if (index < rating) {
        return (
          <i
            key={index}
            className="bi bi-star-half"
            style={{ color: '#ffc107' }}
          ></i>
        );
      } else {
        return (
          <i
            key={index}
            className="bi bi-star"
            style={{ color: '#e4e5e9' }}
          ></i>
        );
      }
    });
  
    return <div>{stars}</div>;
  };
  
  export default Rating;