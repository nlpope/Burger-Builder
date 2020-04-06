import React from "react";

import classes from "../css/Layout.module.css";
import Toolbar from "../components/Navigation/Toolbar";

const Layout = (props) => (
  <>
    <Toolbar />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default Layout;
