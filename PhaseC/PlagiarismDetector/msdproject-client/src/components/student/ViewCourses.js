import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class ViewCourses extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      course: [],
      userID: this.props.userID,
    }
  }

  componentDidMount() {
    console.log("UserID from view all courses per student ", this.state.userID)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentCourses?userId='+this.state.userID)
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  render(){
    console.log("Courses: ",this.state.courses)
    const courses = this.state.courses;
    return(
      <div>
      <h3> My Courses </h3>
      <div className={'container col-md-6 col-md-offset-3'}>
      <BootstrapTable data={courses} striped bordered condensed hover>
        <TableHeaderColumn isKey dataField='courseId'>CourseId</TableHeaderColumn>
        <TableHeaderColumn dataField='courseName'>Course Title</TableHeaderColumn>
        <TableHeaderColumn dataField='courseAbbr'>Course Name</TableHeaderColumn>
        <TableHeaderColumn dataField='courseTerm'>Course Term</TableHeaderColumn>
        <TableHeaderColumn dataField='courseLoc'>Course Location</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
    );
  }
}
