import React from 'react';
import styles from  './step.module.css';
import stepTwo from '../assets/Step2.jpg';
import stepThree from '../assets/Step3.jpg';
import stepDone from '../assets/StepDone.jpg';
import stepOnOne from '../assets/StepOn1.jpg';
import stepOnTwo from '../assets/StepOn2.jpg';
import stepOnThree from '../assets/StepOn3.jpg';

/**
 * Step component
 * @param CircleType 1: stepTwo, 2: stepThree, 3: stepDone, 4: stepOnOne, 5: stepOnTwo, 6: stepOnThree
 * @param text Text to be displayed next to the circle
 */

const StepComponent = ({ circleType, text }) => {
  const circleImages = {
    1: stepTwo,
    2: stepThree,
    3: stepDone,
    4: stepOnOne,
    5: stepOnTwo,
    6: stepOnThree
  };

  const selectedCircleImage = circleImages[Number(circleType)];
  const textClass = Number(circleType) === 1 || Number(circleType) === 2 ? 'grey-text' : 'default-text';

  return (
    <div className={styles['step-component']}>
      <img src={selectedCircleImage} />
      <span className={`${styles['step-text']} ${styles[textClass]}`}>{text}</span>
    </div>
  );
};

export default StepComponent;
