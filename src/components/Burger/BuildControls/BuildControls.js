import React from "react";

import classes from "../../../css/BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

//() instead of {} b/c we return jsx
const Buildcontrols = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        key={ctrl.label}
        label={ctrl.label}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      CHECKOUT
    </button>
  </div>
);

export default Buildcontrols;
