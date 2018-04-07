import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import Header from "./Header"


class App extends React.Component {

  render(){
    return (
      <div className="container text-center">
      <Header />
      </div>
    );
  }
}
export default App
