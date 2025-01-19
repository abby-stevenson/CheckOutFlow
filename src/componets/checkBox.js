import React, { useState } from 'react';
import styles from './checkBox.module.css';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className={isChecked ? "checked" : ""}
      />
    </div>
  );
};

export default Checkbox;