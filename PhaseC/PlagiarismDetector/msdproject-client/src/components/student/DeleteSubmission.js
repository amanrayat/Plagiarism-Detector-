import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';

export default class DeleteSubmission extends React.Component {
  constructor(){
    super();
  }

  // View Courses registered for:
  // http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentCourses?userId=201



  render(){
    return(
      <div>
        <h1> Delete Submissions </h1>
      </div>
    );
  }
}
