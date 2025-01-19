import React, { useState, useEffect } from 'react';
import Button from '../componets/button';
import Stepper from '../componets/stepper';
import CheckBox from '../componets/checkBox';
import ProductCard from '../componets/productCard';
import styles from './addToCart.module.css';
import { Link } from 'react-router-dom';

export default function AddToCart() {

  const BASE_URL = "/api/v1/products";

  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);   
  const [cart, setCart] = useState({});

  // Fetches products from the api and stores them for future use
  const fetchProducts = async () => {
    try {
      const response = await fetch(BASE_URL);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      setProducts(data); // Store products in state
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Fetches the products when the page is loaded
  useEffect(() => {
    fetchProducts();
  }, []);


  // Handle quantity increment
  const incrementQuantity = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: {
        ...product,
        quantity: (prevCart[product.id]?.quantity || 0) + 1,
      },
    }));
  };

  // Handle quantity decrement
  const decrementQuantity = (product) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[product.id]?.quantity || 0;
      if (currentQuantity > 1) {
        return {
          ...prevCart,
          [product.id]: {
            ...product,
            quantity: currentQuantity - 1,
          },
        };
      } else {
        const { [product.id]: _, ...rest } = prevCart; // Remove product if quantity is 0
        return rest;
      }
    });
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.stepper}>
        <Stepper 
          step1={4} 
          step1text="Add To Cart" 
          step2={1} 
          step2text="Payment" 
          step3={2} 
          step3text="Complete" 
        />
        </div>
        <div className={styles.instructions}>Select items to add them to the cart</div>
      </div>

      <div className={styles.itemList}>
        <div className={styles.itemRow}>
          <CheckBox />
          <div className={styles.title}>Item</div>
          <div className={styles.quantity}>Quantity</div>
          <div className={styles.price}>Price</div>
        </div>
        <div className={styles.connector}><hr /></div>
      </div>

      <div className={styles.products}>
      {products.map((product) => (
          <ProductCard 
            key={product.id}
            title = {product.name} 
            categories = {product.categories} 
            rating = {(product.stars / 100).toFixed(1)} 
            price = {(product.price / 100).toFixed(2)} 
            increment={() => incrementQuantity(product)}
            decrement={() => decrementQuantity(product)}
            quantity={cart[product.id]?.quantity || 0} />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
      <Link to="/payment" state={{ cart: Object.values(cart) }}>
        <Button 
          intent="active" 
          label="Continue To Payment" 
        />
        </Link>
      </div>
    </div>
  );
}
