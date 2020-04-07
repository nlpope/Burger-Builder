import React, { Component } from "react";

import Button from "../UI/Button";

//changing to class to add lifecycle hook/method
//this is b/c we only want this to re-render if it's visible
class OrderSummary extends Component {
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
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    );
  }
}

export default OrderSummary;
