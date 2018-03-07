import React from "react";
import PropTypes from "prop-types";

const urlForUsername = username => `https://api.github.com/users/${username}`;

class GitHub extends React.Component {
  state = {
    requestFailed: false
  };

  componentDidMount() {
    fetch(urlForUsername(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed");
        }
        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            githubData: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  render() {
    const { githubData } = this.state;

    if (this.state.requestFailed) return <p>Failed!</p>;

    if (!this.state.githubData) return <p>Loading...</p>;

    return (
      <div>
        {!githubData && <p>Loading...</p>}
        {githubData && <h2>{this.state.githubData.name}</h2>}
      </div>
    );
  }
}

GitHub.propTypes = {
  username: PropTypes.string
};

export default GitHub;
