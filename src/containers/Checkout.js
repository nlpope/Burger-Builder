import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../components/Order/CheckoutSummary";
import ContactData from "../containers/ContactData";

//this is the container that holds the state and other info for <Checkoutsummary />.
class Checkout extends Component {
  state = {
    ingredients: {},
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
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
