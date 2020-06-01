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

  componentDidMount() {
    //new function
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad', '1']
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
  }
  // returnToBuild() {
  //   this.props.history.goBack();
  // }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        {/* giving it route so it has access to history */}
        {/* <Route
          path="/checkout"
          component={() => CheckoutSummary(this.state.ingredients)}
        /> */}
        <CheckoutSummary
          // returnToBuild={() => this.returnToBuild()}
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;
