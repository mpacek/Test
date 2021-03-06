import React, { Component } from 'react';
import axios from 'axios';

export default class RecourceList extends Component {
  state = {
    resources: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(
        `http://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}
