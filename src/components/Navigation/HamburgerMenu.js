import React from "react";

import classes from "../../css/HamburgerMenu.module.css";

const HamburgerMenu = (props) => {
  return (
    <>
      <div
        onClick={props.clicked}
        className={(classes.Point, classes.DesktopOnly)}
      >
        <div className={classes.HamburgerMenu}></div>
        <div className={classes.HamburgerMenu}></div>
        <div className={classes.HamburgerMenu}></div>
      </div>
    </>
  );
};

export default HamburgerMenu;
