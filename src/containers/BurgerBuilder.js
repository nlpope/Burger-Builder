import React, { Component } from "react";

import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2
    }
  };
  //did you know render is a life cycle method
  render() {
    return (
      <>
        <Burger />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuilder;
