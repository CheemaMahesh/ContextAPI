import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";


function Items() {
  // function handleTotal(cost){
  //   value.setTotal+=cost;
  // }

  return (
    <div className={styles.wrapper}>
      <ItemCard name="Apple" price={199} />
    </div>
  );
}

export default Items;
