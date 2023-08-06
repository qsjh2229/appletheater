// StoreItem.js

import React from "react";
import styles from "./StoreItem.module.css";

const StoreItem = ({ items }) => {
  return (
    <div className={styles.storeItem}>
      <ul className={styles.itemWrap}>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <div className={styles.imgbox}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={styles.textbox}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreItem;
