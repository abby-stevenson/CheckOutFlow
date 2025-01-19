import React from 'react';
import styles from './tagStyle.module.css';

/**
 * Tag Component
 * @param intent  Variant for the tag size (small, big)
 * @param text Text to display inside the tag.
 */
const Tag = ({intent = "small", text}) => {
    return (
        <div className={`${styles.tag} ${styles[intent]}`}>
          <span>{text}</span>
        </div>
      );
};

export default Tag;
