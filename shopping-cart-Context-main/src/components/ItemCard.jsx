import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useContext } from "react";
import { itemContext } from "../itemContext";
import { totalContext } from "../totalContext";

function ItemCard({ name, price }) {
  const {item,setItem}=useContext(itemContext);
  const {total,setTotal} =useContext(totalContext);

  const handleAdd = (price) => {
    setTotal(total+price);
    setItem(item+1);
  };

  const handleRemove = (price) => {
    if(total>0){
      setTotal(total-price);
      setItem(item-1);
    }
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd(price)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(price)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
