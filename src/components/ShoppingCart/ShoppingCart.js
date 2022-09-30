import React, { useContext, useState } from "react";
import classes from "./ShoppingCart.module.css";
import Modal from "../UI/Modal.js";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";

const ShoppingCart = (props) => {
  const [finishedReservation, setFinishedReservation] = useState(false);

  const closeHandler = () => {
    props.onShowCart(false);
  };

  const ctx = useContext(CartContext);
  const shoppingItems = ctx.items;

  const reserveHandler = async () => {
    const response = await fetch(
      "https://cat-salon-default-rtdb.firebaseio.com/reservations.json",
      {
        method: "POST",
        body: JSON.stringify({
          whoReserved: "Milos Nesic",
          whatReserved: ctx.items,
        }),
      }
    );

    if (response.ok) {
      setFinishedReservation(true);
      ctx.clearContext();
    }
  };

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
      {!finishedReservation && (
        <div className={classes.totalSum}>
          <span>Total</span>
          <span>${Math.abs(ctx.totalPrice.toFixed(2))}</span>
        </div>
      )}
      {finishedReservation && (
        <p className={classes.message}>Successfully reserved. Thank you!</p>
      )}
      <div className={classes.actions}>
        <button className={classes.buttonClose} onClick={closeHandler}>
          Close
        </button>
        {shoppingItems.length > 0 && (
          <button className={classes.buttonReserve} onClick={reserveHandler}>
            Reserve
          </button>
        )}
      </div>
    </Modal>
  );
};

export default ShoppingCart;
