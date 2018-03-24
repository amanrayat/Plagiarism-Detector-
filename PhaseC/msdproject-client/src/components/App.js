import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.js'
import RegisterPage from './RegisterPage.js'
import CoursePage from './CoursePage.js'
import AdminPage from './AdminPage.js'
import ProfessorCoursePage from './ProfessorCoursePage.js'
import PlagiarismReportsPage from './PlagiarismReportsPage.js'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


class App extends React.Component {

  render(){
    return (
      <div className="container-fluid">
      <Router>
        <div>
          <button className={'btn btn-primary'}>
          <Link to="loginPage"> Login </Link>
          </button>
          <button className={'btn btn-primary'}>
          <Link to="register"> Register </Link>
          </button>
          <button className={'btn btn-primary'}>
          <Link to="adminPage"> Admin Page </Link>
          </button>
          <Route path="/loginPage" component={HomePage} />
          <Route path="/adminPage" component={AdminPage} />
          <Route path="/register" component={RegisterPage} />
        </div>
      </Router>
      </div>
    );
  }
}
export default App
