import React from "react";

import classes from ".././../css/Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //footnotes 1 & 2
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        //footnote 3
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;

/**
 * notes
 * 1.the underscore is a valid js func parameter
 * by convention it's used to tell other devs to 'ignore this parameter'
 *
 * 2.i played with these concepts over in codepen. check it out
 * () and _ aren't the same (though they work similarly)
 * () = no params while _ = 1 IGNORED param
 *
 * 3. Array(n) creates an array with n undefined slots
 * if igKey='salad' props.ingredients[igKey] = 1 or salad's value
 * so if there are 2 salads Array() would make an array for salad with 2 undefined slots
 */
