import classes from './CartItem.module.css';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const CartItem = (props) => {
  const ctx=useContext(CartContext);
  const removeHandler=()=>{
    ctx.removeItem(props.id, props.price);
  }

  return (
    <li className={classes.cartItem}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.date}>Date : {props.date}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
