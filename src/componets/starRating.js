import React from 'react';
import styles from './starRating.module.css'; 
import bigFullStar from '../assets/BigFilledInStar.jpg';
import bigEmptyStar from '../assets/BigEmptyStar.jpg';
import littleFullStar from '../assets/LittleFilledInStar.jpg';
import littleEmptyStar from '../assets/LittleEmptyStar.jpg';

const StarsRating = ({ rating, starSize = 'big' }) => {
  
  //Chooses the appropriate size of the star 
  const getStarImages = () => {
    if (starSize === 'small') {
      return {
        full: littleFullStar,
        empty: littleEmptyStar,
      };
    } else {
      return {
        full: bigFullStar,
        empty: bigEmptyStar,
      };
    }
  };

  // Get the correct images based on the starSize prop
  const { full, empty } = getStarImages();

  // Create an array of full and empty stars based on the rating
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={full} alt="full star" key={`star-${i}`} />);
    } else {
      stars.push(<img src={empty} alt="empty star" key={`star-${i}`} />);
    }
  }

  return (
    <div className={`${styles['stars-container']} `}>
      {stars}
    </div>
  );
};

export default StarsRating;
