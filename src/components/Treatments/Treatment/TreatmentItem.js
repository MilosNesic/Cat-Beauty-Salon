import Form from "./Form";
import classes from "./TreatmentItem.module.css";

const TreatmentItem=(props)=>{
    return(
        <li className={classes.treatment}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>${props.price}</div>
            </div>
            <Form/>
        </li>
    );
};

export default TreatmentItem;