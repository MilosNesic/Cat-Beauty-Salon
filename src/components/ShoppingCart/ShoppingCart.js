import React, { useContext } from "react";
import classes from "./ShoppingCart.module.css";
import Modal from "../UI/Modal.js";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";

const ShoppingCart = (props) => {
  const closeHandler = () => {
    props.onShowCart(false);
  };
  const ctx = useContext(CartContext);
  const shoppingItems = ctx.items;

  return (
    <Modal onBackgroundClick={closeHandler}>
      <ul className={classes.items}>
        {shoppingItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            date={item.date}
            price={item.price}
          />
        ))}
      </ul>
      <div className={classes.totalSum}>
        <span>Total</span>
        <span>${Math.abs(ctx.totalPrice.toFixed(2))}</span> 
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonClose} onClick={closeHandler}>
          Close
        </button>
        {shoppingItems.length > 0 && (
          <button className={classes.buttonOrder}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default ShoppingCart;
