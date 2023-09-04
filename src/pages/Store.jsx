// Store.js

import React, { useState } from "react";
import styles from "./Store.module.scss";
import StoreItem from "../component/store/StoreItem";
import StoreItemData from "../component/StoreData";

const Store = () => {
  const [activeTab, setActiveTab] = useState("new");
  const storeData = StoreItemData;

  const filterCa = {
    new: storeData.filter((i) => i.category === "new"),
    pop: storeData.filter((i) => i.category === "pop"),
    snack: storeData.filter((i) => i.category === "snack"),
    ticket: storeData.filter((i) => i.category === "ticket"),
    drink: storeData.filter((i) => i.category === "drink"),
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const CaTab = ({ label }) => (
    <button
      className={
        activeTab === label ? `${styles.tanBtn} ${styles.active}` : styles.tanBtn
      }
      onClick={() => handleTabClick(label)}
    >
      {label}
    </button>
  );

  return (
    <div className={styles.store}>
      <h2>스토어</h2>
<<<<<<< HEAD
=======
      <img className={styles.popadd} src={require("../image/storeimg.jpg")} alt="popcon add" />
>>>>>>> 7d622e5dfd5b5dfb4a712af4b88eaf0fd12fc3f3
      <div className={styles.storeInfo}>
        <div className={styles.storeTan}>
          <ul>
            <li>
              <CaTab label="new" />
            </li>
            <li>
              <CaTab label="pop" />
            </li>
            <li>
              <CaTab label="snack" />
            </li>
            <li>
              <CaTab label="ticket" />
            </li>
            <li>
              <CaTab label="drink" />
            </li>
          </ul>
        </div>
        <StoreItem items={filterCa[activeTab]} />
      </div>
      <div>
        <img src={require("../image/addbanner.png")} alt="" />
      </div>
    </div>
  );
};

export default Store;
