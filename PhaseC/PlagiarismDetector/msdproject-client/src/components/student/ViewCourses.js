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
    let table
    if(courses){
      table = <UserTable courses={this.state.courses} />
    }

    return(
      <div>
      <h3> My Courses </h3>
          {table}
      </div>
    );
  }
}


class UserTable extends React.Component {

  render() {
    var course = this.props.courses.map(function(course) {
      return (<CourseRow
        course={course}
        key={course.id}/>)
    });
    return (
      <div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Course Name</th>
              <th>Term</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {course}
          </tbody>

        </table>
      </div>
    );
  }
}

class CourseRow extends React.Component {

  render() {

    return (
      <tr className="eachRow">
        <td> {this.props.course.courseId} </td>
        <td> {this.props.course.courseName} </td>
        <td> {this.props.course.courseAbbr} </td>
        <td> {this.props.course.courseTerm} </td>
        <td> {this.props.course.courseLoc} </td>
      </tr>
    );
  }
}
