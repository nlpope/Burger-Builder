import React from "react";

import classes from "../../css/Modal.module.css";
import Backdrop from "../UI/Backdrop";

const modal = (props) => (
  <>
    <Backdrop clicked={props.modalClosed} show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </>
);

export default modal;
