import React from 'react';
import styles from './button.module.css';

/**
 * Button component
 * @param intent Button variant (active, disabled).
 * @param label Text to be displayed on the button.
 * @param onPress Function that occurs when the button is pressed.
 */
const Button = ({ intent = 'active', label, onPress }) => {
  return (
    <button 
      className={`${styles.button} ${styles[intent]}`} 
      onClick={onPress}
      disabled={intent === 'disabled'} 
    >
      {label}
    </button>
  );
};

export default Button;