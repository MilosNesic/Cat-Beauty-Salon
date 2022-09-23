import Input from "../../UI/Input";
import classes from "./Form.module.css";
import { useContext, useRef } from "react";
import CartContext from "../../../store/CartContext";

const Form = (props) => {
  const ctx = useContext(CartContext);
  const dateInputRef=useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const dateInput=dateInputRef.current.value;

    const newObject = {
      id: props.itemID+"-"+dateInput,
      name: props.name,
      date: dateInput,
      price: props.price,
    };
    ctx.addItem(newObject);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Pick a date"
        input={{ id: "date_" + props.itemID, type: "date" }}
        ref={dateInputRef}
      />
      <button>+Add</button>
    </form>
  );
};

export default Form;
