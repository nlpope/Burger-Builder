import React, { Component } from "react";

import Button from "../components/UI/Button";
import classes from "../css/ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = () => {};

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
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
