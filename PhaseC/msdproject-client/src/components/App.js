import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import HomePage from './HomePage.js'
import RegisterPage from './RegisterPage.js'
import CoursePage from './CoursePage.js'
import AdminPage from './AdminPage.js'
import ProfessorCoursePage from './ProfessorCoursePage.js'
import PlagiarismReportsPage from './PlagiarismReportsPage.js'


class App extends React.Component {

  render(){
    return (
      <div>
      <HomePage />
      <RegisterPage />
      <CoursePage />
      <AdminPage />
      <ProfessorCoursePage />
      <PlagiarismReportsPage />
      </div>
    );
  }
}
export default App
