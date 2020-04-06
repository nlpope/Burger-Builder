import React from "react";

import classes from "../../css/Toolbar.module.css";
import Logo from "../../components/Logo";
import NavigationItems from "../Navigation/NavigationItems";

const Toolbar = (props) => {
  return (
    <>
      <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </>
  );
};

export default Toolbar;
