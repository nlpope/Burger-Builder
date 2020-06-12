import React, { Component } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../components/Order/CheckoutSummary";
import ContactData from "../containers/ContactData";

//this is the container that holds the state and other info for <Checkoutsummary />.
class Checkout extends Component {
  state = {
    ingredients: {},
    price: 0,
  };

  componentDidMount() {
    //new function
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      // ['salad', '1']
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
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
          // component={ContactData}
          // but rendering it manually allows you to pass props
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
