import React from 'react';
import styles from './quantity.module.css';

const Quantity = ({increment, decrement, quantity}) => {

  return (
    <div className={styles.quantity}>
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Quantity;