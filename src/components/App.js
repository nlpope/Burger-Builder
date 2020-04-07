//this is a dumb component (not a container, no state)
//import React object from react package
import React, { Component } from "react";
import Layout from "../containers/Layout";

import BurgerBuilder from "../containers/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
