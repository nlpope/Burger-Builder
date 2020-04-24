import React, { Component } from "react";

const FetchHOC = (url) => (Component) =>
  class extends Component {
    state = { data: null };
    componentDidMount() {
      fetch(url).then((data) => this.setState({ data }));
    }
    render() {
      return <Component {...this.props} {...this.state.data} />;
    }
  };

export default FetchHOC;
