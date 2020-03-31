import React from "react";

import classes from ".././../css/Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient";

const Burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
