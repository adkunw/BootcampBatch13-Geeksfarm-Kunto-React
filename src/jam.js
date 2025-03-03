import React, { Component } from "react";

class Jam extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div className="text-center p-4 bg-gray-200 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold">Current Time</h1>
        <p className="text-xl mt-2">{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Jam;
