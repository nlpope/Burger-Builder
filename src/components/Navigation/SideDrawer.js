import React from "react";

import Logo from "../Logo";
import NavigationItems from "../Navigation/NavigationItems";
import classes from "../../css/SideDrawer.module.css";
import Backdrop from "../UI/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <div className={classes.SideDrawerItems}>
            <NavigationItems />
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
