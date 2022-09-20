import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const ModalInside = (props) => {
  return (
    <div className={classes.modalInside}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const ModalBackground = (props) => {
  return (
    <div className={classes.modalBackground} onClick={props.onClick}></div>
  );
};

const Modal = (props) => {
  const layer2 = document.getElementById("layer2");

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalBackground onClick={props.onBackgroundClick} />,
        layer2
      )}
      ;
      {ReactDOM.createPortal(
        <ModalInside>{props.children}</ModalInside>,
        layer2
      )}
    </Fragment>
  );
};

export default Modal;
