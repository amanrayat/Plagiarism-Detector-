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
import Navbar from "./Navbar";
import ChooseCourse from "./ChooseCourse";
import ChooseCoursePage from "./ChooseCoursePage";
import ViewStudentFilesPage from "./ViewStudentFilesPage";
import './App.css';

export default class Header extends React.Component {

  render() {
    return (
      <div>
      <Router>
        <div>
            <br />
            <h1 > Plagiarism Detection System </h1>
            <div className={'container'}>
            <button className={'btn'}>
              <Link to="login"> Home Page </Link>
            </button>
          </div>
          <Route path="/login" component={HomePage} />
          <Route path="/logout" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/viewFiles" component={ViewStudentFilesPage} />

        </div>
      </Router>
      </div>
    );
  }
}
