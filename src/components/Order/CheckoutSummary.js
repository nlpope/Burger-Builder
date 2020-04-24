import React, { Component } from "react";

// import Burger from "../Burger/Burger";
import Button from "../UI/Button";
import classes from "../../css/CheckoutSummary.module.css";

class CheckoutSummary extends Component {
  state = {};
  render() {
    console.log(this.props.ingredients);

    return (
      <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes great!</h1>
        {/* review vid 221: building checkout */}
        {/* <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredents={props.ingredients} />
      </div> */}
        <Button btnType="Danger" clicked={this.props.returnToBuild}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.returnToBuild}>
          CONTINUE
        </Button>
      </div>
    );
  }
}

export default CheckoutSummary;
