import React, { Component } from "react";

import Button from "../UI/Button";
import classes from "../../css/OrderSummary.module.css";

//changing to class to add lifecycle hook/method
//this is b/c we only want this to re-render if it's visible
class OrderSummary extends Component {
  //this could be a functional component
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <>
        <div className={classes.OrderSummary}>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>{ingredientSummary}</ul>
          <p>
            <strong>total Price: ${this.props.price.toFixed(2)}</strong>
          </p>
          <p>Continue to Checkout?</p>
          <div className={classes.btn}>
            <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>
              CANCEL
            </Button>
            <Button btnType={"Success"} clicked={this.props.purchaseContinued}>
              CONTINUE
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default OrderSummary;
