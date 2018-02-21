import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { history } from "../../store";

// components
import Button from "../../components/Button/";
import Error from "../../components/Error/";

class PocketComponent extends React.Component {
  getRequestToken = e => {
    e && e.preventDefault();

    const { getRequestToken } = this.props.actions;

    getRequestToken();
  };

  handleRedriect = url => {
    window.location.href = url;
  };

  getAccessToken = () => {
    const { getAccessToken } = this.props.actions;

    getAccessToken();
  };

  componentDidMount() {
    // Authenticate Pocket on return from user authentication
    const query = history.getCurrentLocation().query;
    if (query && query.authenticate) {
      this.getAccessToken();
    }
  }

  componentDidUpdate() {
    // Redirect to Pocket once redirect url is received
    const hasURL = _.has(this.props, "status.result.url");
    if (hasURL) {
      this.handleRedriect(this.props.status.result.url);
    }
  }

  render() {
    const { loading, error } = this.props.status;

    return (
      <div>
        <h1>Pocket component</h1>

        <Button loading={loading} onClick={e => this.getRequestToken(e)}>
          Authenticate Pocket
        </Button>

        {error && <Error message={error} />}
      </div>
    );
  }
}

PocketComponent.propTypes = {
  actions: PropTypes.shape({
    getRequestToken: PropTypes.func.isRequired,
    putRequestTokenFailure: PropTypes.func.isRequired,
    putRequestTokenSuccess: PropTypes.func.isRequired,
    getAccessToken: PropTypes.func.isRequired,
    putAccessTokenFailure: PropTypes.func.isRequired,
    putAccessTokenSuccess: PropTypes.func.isRequired
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    result: PropTypes.object
  })
};

export default PocketComponent;
