import React from "react";

import classes from "../../css/Menu.module.css";

const Menu = (props) => {
  return (
    <>
      <div onClick={props.clicked} className={classes.DesktopOnly}>
        <div className={classes.Menu}></div>
        <div className={classes.Menu}></div>
        <div className={classes.Menu}></div>
      </div>
    </>
  );
};

export default Menu;
