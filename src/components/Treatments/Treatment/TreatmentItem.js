import Form from "./Form";
import classes from "./TreatmentItem.module.css";

const TreatmentItem = (props) => {
  return (
    <li id={"item_" + props.id} className={classes.treatment}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <Form
        itemID={props.id}
        name={props.name}
        price={props.price}
      />
    </li>
  );
};

export default TreatmentItem;
