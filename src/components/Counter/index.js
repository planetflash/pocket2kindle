import React from "react";

import Button from "components/Button";

class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div>
        <p>Current count: {this.state.count}</p>
        <Button onClick={this.increment} text={"Increment Count"} />
      </div>
    );
  }
}

export default Counter;
