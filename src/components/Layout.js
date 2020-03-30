import React from "react";

import classes from "../css/Layout.module.css";

const Layout = props => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </>
);

export default Layout;
