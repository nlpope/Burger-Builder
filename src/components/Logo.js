import React from "react";

import classes from "../css/Logo.module.css";

//tell weback we are using this image as whole src folder isn't compiled in webpack ...
//(though it works in development by linking to the file path stored in local memory)
import burgerLogo from "../assets/images/burger.png";

const Logo = (props) => (
  <div className={classes.Logo}>
    {/* to path where weback stored the image */}
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default Logo;
