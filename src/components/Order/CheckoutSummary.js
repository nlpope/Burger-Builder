import React from "react";

import Burger from "../Burger/Burger";
import Button from "../UI/Button";
import classes from "../../css/CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  let burgerFill = null;

  if (props.ingredients.tomato) {
    console.log("ingred", props);
    burgerFill = (
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
    );
  }

  // console.log(props.ingredients.tomato);

  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>
      {/* review vid 221: building checkout */}
      {burgerFill}

      {console.log("update", props.ingredients)}

      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
