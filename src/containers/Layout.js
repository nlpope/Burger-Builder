//could be a higher order component as it just wraps around App.js
import React, { Component } from "react";

import classes from "../css/Layout.module.css";
import Toolbar from "../components/Navigation/Toolbar";
import SideDrawer from "../components/Navigation/SideDrawer";

class Layout extends Component {
  state = {
    showsideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showsideDrawer: false });
  };

  sideDrawerOpenedHandler = () => {
    this.setState({ showsideDrawer: true });
  };

  render() {
    return (
      <>
        <Toolbar handleOpen={this.sideDrawerOpenedHandler} />
        <SideDrawer
          open={this.state.showsideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
