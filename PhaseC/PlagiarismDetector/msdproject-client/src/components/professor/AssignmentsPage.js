import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CourseList from './CourseList'

export default class AssignmentsPage extends React.Component {
  constructor(){
    super();

    this.state = {
      courseId: '',
      assignements: [],
      assignmentNo: '',
      assignmentName: '',
      submissionDate: '',
      courses: [],
    }

    this.fetchCourses = this.fetchCourses.bind(this);
    this.fetchAssignments = this.fetchAssignments.bind(this);

  }

  fetchCourses(){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  fetchAssignments(){
    console.log("Couse ID",this.state.courseId)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/assignmentsByCourse?courseId='+this.state.courseId)
      .then(response => response.json())
      .then(data => this.setState({assignments: Object.values(data)[0]}));
    console.log("Assignments ",this.state.assignments)
  }

  componentDidMount() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  update(){
    this.setState({
      courseId: this.refs.courseID.value
    });
  }

  render(){
    let courses = this.state.courses
    let assignments = this.state.assignments
    console.log("Courses",this.state.courses)
    return(
      <div>
        <CourseList />
        <input type="text" name="courseID" ref="courseID" placeholder="CourseID"
              onChange={this.update.bind(this)}/>
        <button onClick={this.fetchAssignments.bind(this)}> View Assignments </button>
        <div className={'container col-md-6 col-md-offset-3'}>
        <BootstrapTable data={assignments} striped bordered condensed hover>
          <TableHeaderColumn dataField='assignmentNo'>Assignment Number</TableHeaderColumn>
          <TableHeaderColumn isKey dataField='assignmentId'>Assignement ID</TableHeaderColumn>
          <TableHeaderColumn dataField='assignmentName'>Assignment Name</TableHeaderColumn>
          <TableHeaderColumn dataField='submissionDate'>Due Date</TableHeaderColumn>
        </BootstrapTable>
        </div>
      </div>
    );
  }
}
