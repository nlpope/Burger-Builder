//this is a dumb component (not a container, no state)
//import React object from react package
import React, { Component } from "react";
import Layout from "../containers/Layout";
import { Switch, Route, Redirect } from "react-router-dom";

import BurgerBuilder from "../containers/BurgerBuilder";
import Checkout from "../containers/Checkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/burger-builder" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Redirect from="/" to="/burger-builder" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
