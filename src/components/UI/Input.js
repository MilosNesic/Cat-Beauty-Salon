import classes from "./Input.module.css";

const Input=(props)=>{ /* props su label i objekat input koji sadrzi
sve sto mi je potrebno od informacija, tip, ogranicenja...*/
return(
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
    </div>
);
};

export default Input;