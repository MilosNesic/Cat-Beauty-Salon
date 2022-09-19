import Input from "../../UI/Input";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Pick a date"
        input={{ id: "date_"+props.itemID, type: "date" }}
      />
      <button>+Add</button>
    </form>
  );
};

export default Form;
