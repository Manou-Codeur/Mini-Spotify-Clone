import React, { Component } from "react";

class FetchError extends Component {
  state = {
    error: false,
    errorMsg: "",
  };

  static getDerivedStateFromError(err) {
    return { error: true, errorMsg: err.message };
  }

  render() {
    const { error, errorMsg } = this.state;

    return error ? (
      <h1 style={{ textAlign: "center", marginTop: "3em" }}>{errorMsg}</h1>
    ) : (
      this.props.children
    );
  }
}

export default FetchError;
