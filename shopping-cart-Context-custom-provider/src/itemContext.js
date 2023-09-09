import { createContext, useState,useContext } from "react";
import CartModal from "./components/CartModal"

const itemContext = createContext();


//creating a custom hook
function useValue(){
  const value=useContext(itemContext);
  return value;
}





function CustomItemContext({children}) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart,setShowCart]=useState(false);


  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };
  
  const handleRemove = (price) => {
    if (total > 0) {
      setTotal((prevState) => prevState - price);
      setItem(item - 1);
    }
    
  };
  const handleReSet=()=>{
    setItem(0);
    setTotal(0);
  }
  const toggle=()=>{
    setShowCart(!showCart);
  }

  return(
    <itemContext.Provider value={{total,item,handleAdd,handleRemove,handleReSet,toggle,showCart}}>
      {showCart && <CartModal toggle={toggle} />}
      {children}
    </itemContext.Provider>
  )
}

export { itemContext,useValue };
export default CustomItemContext;
