import React from "react";

import classes from "../../css/Backdrop.module.css";

const Backdrop = (props) =>
  props.show ? (
    <div onClick={props.clicked} className={classes.Backdrop}></div>
  ) : null;

export default Backdrop;
