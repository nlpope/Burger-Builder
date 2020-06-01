import React from "react";

import Burger from "../Burger/Burger";
import Button from "../UI/Button";
import classes from "../../css/CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes great!</h1>
      {/* review vid 221: building checkout */}
      {/* <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredents={props.ingredients} />
      </div> */}
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
