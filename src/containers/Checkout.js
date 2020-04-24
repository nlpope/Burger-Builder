import React, { Component } from "react";

import CheckoutSummary from "../components/Order/CheckoutSummary";

//this is the container that holds the state and other info for <Checkoutsummary />.
class Checkout extends Component {
  state = {
    ingredients: {
      tomato: 1,
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };
  returnToBuild() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        {/* giving it route so it has access to history */}
        {/* <Route
          path="/checkout"
          component={() => CheckoutSummary(this.state.ingredients)}
        /> */}
        <CheckoutSummary
          returnToBuild={() => this.returnToBuild()}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
