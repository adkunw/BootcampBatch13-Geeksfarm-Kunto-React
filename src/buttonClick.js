import React, { Component } from "react";

class Counting extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>you Clicked {this.state.count} times</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counting;
