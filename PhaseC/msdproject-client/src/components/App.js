import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.js'
import RegisterPage from './RegisterPage.js'
import CoursePage from './CoursePage.js'

class App extends React.Component {
  render(){
    return (
      <div>
      <HomePage />
      <RegisterPage />
      <CoursePage />
      </div>
    );
  }
}

export default App
