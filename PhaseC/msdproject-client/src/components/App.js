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
