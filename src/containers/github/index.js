import React from "react";

import GitHub from "./Github.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GitHub username="jackfranklin" />
      </div>
    );
  }
}

export default App;
