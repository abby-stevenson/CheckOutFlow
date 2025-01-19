import React from 'react';
import styles from './stepper.module.css';
import Step from './step.js';

/**
 * Stepper Component
 * @param step1 Number of first icon 
 * @param step1text Text of first icon 
 * @param step2 Number of second icon 
 * @param step2text Text of second icon 
 * @param step3 Number of third icon 
 * @param step3text Text of third icon 
 */
const Stepper = ({step1, step1text, step2, step2text, step3, step3text}) => {
  return (
    <div className={styles.container}>
        <Step circleType= {step1} text={step1text} />
        <div className={styles.connector}> <hr /> </div>
        <Step circleType= {step2} text={step2text} />
        <div className={styles.connector}> <hr /> </div>
        <Step circleType= {step3} text={step3text} />
    </div>
  );
};

export default Stepper;
