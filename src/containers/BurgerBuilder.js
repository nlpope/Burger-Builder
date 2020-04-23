//within container folder b/c it CONTAINS state
import React, { Component } from "react";

import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal";
import OrderSummary from "../components/Burger/OrderSummary";
import axios from "../axios-orders";
import Spinner from "../components/UI/Spinner";
//withErrorHandler lowercase b/c we use it as wrapper, NOT in JSX
import withErrorHandler from "../hoc/withErrorHandler";

//so yes, means don't touch, but also represents global constants
const INGREDIENT_PRICES = {
  tomato: 0.5,
  salad: 0.5,
  cheese: 0.4,
  meat: 2.3,
  bacon: 1.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      tomato: null,
      salad: null,
      bacon: null,
      cheese: null,
      meat: null,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  //we're about to upload ingredients dynamically from the back end
  //best way to do that (fetching data) is via componentDidMount()
  componentDidMount() {
    axios
      .get("https://react-my-burger-1ecd2.firebaseio.com/ingredients.json")
      .then((response) => {
        let newState = { ...this.state.ingredients };
        for (var key in response.data) {
          newState[key] = response.data[key];
        }
        this.setState({ ingredients: newState });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  // handleErrors = (err) => {
  //   let errorMessage;
  //   if (err.response) {
  //     errorMessage = err.response.status;
  //   } else if (err.request) {
  //     errorMessage = "Problem With Request!";
  //   } else {
  //     errorMessage = err.message;
  //   }
  //   this.setState({ error: errorMessage });
  // };

  updatePurchaseState(ingredients) {
    //create array of string entries(salad, bacon,...)
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  //use fat arrow function to handle binding to the 'this' keyword
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //if you plan to use state in setState use prevState or dump contents of state into a copied object, array, etc. and use that (async)
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    //so firebase will create an 'orders' path from base url (.json is required for firebase stuff)
    const order = {
      ingredients: this.state.ingredients,
      //recalculate price in server for producgtion ready app (user could dig into code and change this as we have it set up now)
      price: this.state.totalPrice,
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
        this.setState({ loading: false, purchasing: false });
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  //did you know render is a life cycle method
  render() {
    const disabledInfo = {
      //copying state in immutable way
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //{salad: true, meat: false,...}
    }

    let orderSummary = null;

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
