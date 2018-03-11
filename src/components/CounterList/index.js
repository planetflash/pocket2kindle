import React from "react";

import Counter from "components/Counter";
import Button from "components/Button";

const createRange = num => Array.from(Array(num).keys());

class CounterList extends React.Component {
  state = {
    numCounters: 2
  };

  addCounter = () =>
    this.setState(prevState => ({
      numCounters: prevState.numCounters + 1
    }));

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));

  renderCounter = index => {
    return (
      <li key={index}>
        <Counter />
      </li>
    );
  };

  render() {
    const countersArray = createRange(this.state.numCounters);

    return (
      <div>
        <Button onClick={this.addCounter} text={"Add Counter"} />

        <ul>{countersArray.map(num => this.renderCounter(num))}</ul>
      </div>
    );
  }
}

export default CounterList;
