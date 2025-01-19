import React from 'react';
import Tag from './tag';
import StarsRating from './starRating'
import styles from './productCard.module.css';


const ProductCard2 = ({intent = "small", title, categories, rating, quantity, price}) => {

    const imageClassName = intent === "small" ? styles.imagePlaceholderSmall : styles.imagePlaceholder;

  return (
    <div className={styles.card}>
      <div className={imageClassName}></div>
      <div className={styles.details}>
        <div className = {styles.titleBox}>
          <div className = {styles.title}>{title}</div>
          {categories.map((category) => (
            <Tag intent={intent} text={category} />
          ))}   
        </div>
        <StarsRating rating={Number(rating)} starSize={intent} className={styles.starsRating} />
      </div>
      <div className={styles.quantity}>
        {quantity}
      </div>
      <div className={styles.price}>
        {"$" + price}
      </div>
    </div>
  );
};

export default ProductCard2;