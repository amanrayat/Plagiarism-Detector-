import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://localhost:8080/team208/';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: "",
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;

    return (
      <div>
        {this.state.hits}
      </div>
    );
  }
}

export default App;
