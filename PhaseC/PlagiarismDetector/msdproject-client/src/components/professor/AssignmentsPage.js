import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';

export default class AssignmentsPage extends React.Component {
  constructor(){
    super();
  }

  // Register for course API
  // http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/registerStudentCourses?userId=201&courseId=2

  render(){
    return(
      <div>
        <h1> AssignmentsPage </h1>
      </div>
    );
  }
}
