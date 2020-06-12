import React, { Component } from "react";

import Button from "../components/UI/Button";
import classes from "../css/ContactData.module.css";
import axios from "../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    //so firebase will create an 'orders' path from base url (.json is required for firebase stuff)
    const order = {
      ingredients: this.props.ingredients,
      //recalculate price in server for producgtion ready app (user could dig into code and change this as we have it set up now)
      price: this.props.price,
      customer: {
        name: "Noah Pope",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "United States",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    console.log(this.props.ingredients);
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={classes.Input}
            type="text"
            name="address"
            placeholder="Street"
          />
          <input
            className={classes.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            Order
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
