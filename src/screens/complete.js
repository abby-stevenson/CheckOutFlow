import React, { useState } from 'react';
import Button from '../componets/button';
import Stepper from '../componets/stepper';
import ProductCard2 from '../componets/productCard2';
import styles from './complete.module.css'
import {useLocation } from 'react-router-dom';


export default function Complete() {

  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  const totalCost = cart.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.stepper}>
        <Stepper 
          step1={3} 
          step1text="Add To Cart" 
          step2={3} 
          step2text="Payment" 
          step3={6} 
          step3text="Complete" 
        />
        </div>
      </div>

      <div className = {styles.message}>Thank you! Your order is being processed.</div>

      <div className = {styles.order}>Order Details:</div>

      <div className={styles.itemList}>
        <div className={styles.itemRow}>
          <div className={styles.title}>Item</div>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.price}>Price</div>
        </div>
        <div className={styles.connector}><hr /></div>
      </div>

      <div className={styles.products}>
      {cart.map((item) => (
          <ProductCard2 
          key={item.id}
          title = {item.name} 
          categories = {item.categories} 
          rating = {(item.stars / 100).toFixed(1)} 
          quantity =  {item.quantity}
          price = {(item.quantity * item.price / 100).toFixed(2)}

          />
        ))}
      </div>
      <div className={styles.paymentSection}>
        <div className={styles.totalCost}>Total Cost: ${(totalCost / 100).toFixed(2)}</div>
        </div>
        <div className={styles.buttonWrapper}>
        <Button 
          intent="active" 
          label="Go to dashboard"  
        />
      </div>
    </div>
  );
}