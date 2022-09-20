import classes from "./ShoppingCart.module.css";
import Modal from "../UI/Modal.js";

const shoppingItems = (
  <ul className={classes.items}>
    {[{ id: "c1", name: "bathing", price: "22.56" }].map((item) => (
      <li>{item.name}</li>
    ))}
  </ul>
);

const ShoppingCart = (props) => {

  const closeHandler=()=>{
    props.onShowCart(false);
  };

  return (
    <Modal onBackgroundClick={closeHandler}>
      {shoppingItems}
      <div className={classes.totalSum}>
        <span>Total</span>
        <span>120.73</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes.buttonClose}
          onClick={closeHandler}
        >
          Close
        </button>
        <button className={classes.buttonOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default ShoppingCart;
