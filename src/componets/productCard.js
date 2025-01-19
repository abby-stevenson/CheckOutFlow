import React from 'react';
import Tag from './tag';
import StarsRating from './starRating'
import Quantity from './quantity';
import CheckBox from './checkBox';
import styles from './productCard.module.css';


const ProductCard = ({title, categories, rating, price, increment, decrement, quantity}) => {

  return (
    <div className={styles.card}>
      <CheckBox />
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.details}>
        <div className = {styles.titleBox}>
          <h3 className={styles.title}>{title}</h3>
          {categories.map((category) => (
            <Tag intent="big" text={category} />
          ))}   
        </div>
        <StarsRating rating={rating} starSize="big" />
      </div>
      <div className={styles.quantity}>
        <Quantity
          increment = {increment}
          decrement = {decrement}
          quantity = {quantity} />
      </div>
      <div className={styles.price}>
        {"$" + price}
      </div>
    </div>
  );
};

export default ProductCard;