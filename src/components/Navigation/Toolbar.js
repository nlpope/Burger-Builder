import React from "react";

import classes from "../../css/Toolbar.module.css";
import Logo from "../../components/Logo";
import NavigationItems from "../Navigation/NavigationItems";
import HamburgerMenu from "./HamburgerMenu";

const Toolbar = (props) => {
  return (
    <>
      <header className={classes.Toolbar}>
        <HamburgerMenu clicked={props.handleOpen} />
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </>
  );
};

export default Toolbar;
