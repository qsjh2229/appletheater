import React from 'react';
import styles from './Store.module.scss'

const Store = () => {
  return (
    <div className={styles.store}> 
 <div className={styles.storeInfo}>
      <h2>스토어</h2>
        <div className={styles.storeTan}>
          <ul>
            <li><span>새로운 상품</span></li>
            <li><span>티켓</span></li>
            <li><span>팝콘</span></li>
            <li><span>음료</span></li>
            <li><span>스낵</span></li>
          </ul>
        </div>
      </div>
 </div>
  );
};

export default Store;