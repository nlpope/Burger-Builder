import React from "react";

import classes from "../../../css/BuildControls.module.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

//() instead of {} b/c we return jsx
const Buildcontrols = props => (
  <div className={classes.Buildcontrols}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default Buildcontrols;
