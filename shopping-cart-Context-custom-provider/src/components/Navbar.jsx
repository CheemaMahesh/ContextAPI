import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemContext";

function Navbar() {
  const value = useValue();
  const {handleReSet,showCart,toggle}=value;
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <div className="buttonWrapper">
      <button className="buttons" 
      onClick={() => toggle()}
      >
          Cart
        </button>
      <button className="button" onClick={() => handleReSet()}>
          ReSet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
