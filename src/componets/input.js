import React from 'react';
import styles from './inputStyle.module.css'; 

/**
 * Input component
 * @param intent TextField variant (active, good, error).
 * @param title The title of the text field
 * @param placeholder The placeholder for the text field
 */

const Input = ({ intent, title, placeholder }) => {
  const [value, setValue] = React.useState('');


  function onChangeInput(text) {
    setValue(text);
  }

  return (
    <div className={styles.container}>
    <div className={styles.row}>
      <span className={styles.title}>{title}</span>
      {title && <span className={styles.asterisk}>*</span>}
    </div>
    <input
      className={`${styles.textField} ${styles[intent]}`} 
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChangeInput(e.target.value)}
    />
  </div>
  );
};

export default Input;
