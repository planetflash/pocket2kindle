import React from "react";

import Button from "components/Button";

class Counter extends React.Component {
  state = {
    count: 0
  };

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount
    }));

  increment = this.makeIncrementer(1);
  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <Button
          className="increment"
          onClick={this.increment}
          text={"Increment Count"}
        />
        <Button
          className="decrement"
          onClick={this.decrement}
          text={"Decrement Count"}
        />
      </div>
    );
  }
}

export default Counter;
