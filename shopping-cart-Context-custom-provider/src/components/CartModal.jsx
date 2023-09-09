import React from "react";
// import styles from "../styles/ItemCard.module.css";
import styles from "../styles/CartModal.module.css"

export default function CartModal(){
    return(
        <div className={styles.CartModal}>
            <div className={styles.closeButton}>
                close
            </div>
            <div className={styles.clearButton}>
                Clear
            </div>
            <div className={styles.itemContainer}>

            </div>
            <div className={styles.total}>
                <div className={styles.totalText}>
                                Total
                </div>
                <div className={styles.totalPrice}>
                               Price
                </div>

            </div>

        </div>
    )
}