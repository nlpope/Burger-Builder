import React, { Component } from "react";

import classes from "../../css/Modal.module.css";
import Backdrop from "../UI/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("[Modal] did update");
  }

  render() {
    return (
      <>
        <Backdrop clicked={this.props.modalClosed} show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
