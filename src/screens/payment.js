import React, { useState } from 'react';
import Button from '../componets/button';
import Stepper from '../componets/stepper';
import ProductCard2 from '../componets/productCard2';
import Input from '../componets/input';
import styles from './payment.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Payment() {

  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardInfo, setCardInfo] = useState("");
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
          step2={5} 
          step2text="Payment" 
          step3={2} 
          step3text="Complete" 
        />
        </div>
      </div>

      <div className={styles.itemList}>
        <div className={styles.itemRow}>
          <div className={styles.title}>Item</div>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.price}>Price</div>
        </div>
        <div className={styles.connector}><hr /></div>
      </div>

      <div className={styles.products}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
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
      )}
      </div>
      <div className={styles.paymentSection}>
        <div className={styles.totalCost}>Total Cost: ${(totalCost / 100).toFixed(2)}</div>
        <div className={styles.enterPayment}>Enter Payment Details</div>
        <Input 
            intent={cardName ? "good" : "active"} 
            title={"Cardholder Name"} 
            placeholder={"First and last name"}
            value = {cardName}
            onChange={(e) => setCardName(e.target.value)} />
        <Input 
            intent={cardInfo ? "good" : "active"} 
            title={"Card Information"} 
            placeholder={"Card number"} 
            value = {cardInfo}
            onChange={(e) => setCardInfo(e.target.value)}/>
        <div className={styles.cardDetails}>
            <div className = {styles.inputComponent}>
                <Input 
                    intent={expirationDate ? "good" : "active"} 
                    placeholder={"Expiration Date MM/YY"} 
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}/>
            </div>
            <div className = {styles.inputComponent}>
                <Input 
                    intent={cvv ? "good" : "active"} 
                    placeholder={"CVV"}
                    value={cvv} 
                    onChange={(e) => setCvv(e.target.value)}/>
            </div>
        </div>
    </div>
    <div className={styles.buttonWrapper}>
        <Link to = "/complete" state={{ cart: Object.values(cart) }}>
        <Button 
          intent="active" 
          label="Complete Order" 
        />
        </Link>
      </div>
    </div>
  );
}

