import Header from "./components/Header/Header.js";
import Treatments from "./components/Treatments/Treatments.js";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart.js";
import { useState } from "react";
import CartContext from "./store/CartContext.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const chartShownHandler = (Clicked) => {
    if (Clicked) {
      setCartIsShown(true);
    } else {
      setCartIsShown(false);
    }
  };

  const addItemHandler = (item) => {
    if (itemIsAlreadyAdded(item)!==true && item.date!=="") {
      setCartItems(cartItems.concat(item));
      setTotalPrice(totalPrice + item.price);
    }
  };

  const removeItemHandler = (id, price) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    setTotalPrice(totalPrice - price);
  };

  const itemIsAlreadyAdded=(item)=>{
    for(const treatment of cartItems){
      if(treatment.id===item.id){
        return true;
      }
      
    }
    return false;
  };

  const clearContextHandler=()=>{
    setCartItems([]);
    setTotalPrice(0);
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        totalPrice: totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearContext: clearContextHandler
      }}
    >
      {cartIsShown && <ShoppingCart onShowCart={chartShownHandler} />}
      <Header onChartClicked={chartShownHandler} />
      <Treatments />
    </CartContext.Provider>
  );
}

export default App;
