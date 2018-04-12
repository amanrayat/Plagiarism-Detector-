import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';

export default class AddNewAssignmentsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      courseId: '',
      assignmentNo: '',
      assignmentName: '',
      submissionDate: '',
      courses: [],
      isForm: false,
    }
  }

update(date){
  this.setState({
    courseId: this.refs.courseId.value,
    assignmentNo: this.refs.assignmentNo.value,
    assignmentName: this.refs.assignmentName.value,
    submissionDate: this.refs.yyyy.value+"-"+this.refs.mm.value+"-"+this.refs.dd.value,
  })
  console.log("Submission Date:",this.state.submissionDate)
}

componentDidMount() {
  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
    .then(response => response.json())
    .then(data => this.setState({courses: data}));
}

handleRowUpdate(course) {
  console.log("handleRowUpdate>CourseID>",course.courseId);
  this.setState({
    courseId: course.courseId,
    isForm: true,
  });
  console.log("handleRowUpdate<CourseID<",this.state.courseId);
}

handleClick(){

  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/addAssignment', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: this.state.courseId,
        assignmentNo: this.state.assignmentNo,
        assignmentName: this.state.assignmentName,
        submissionDate: this.state.submissionDate,
      })
    }).then(function(response) {
       return response.json();
     }).then(j =>
        // console.log(Object.values(j)[1].name);
        this.setState({
          courseAbbr: '',
          courseLoc:'',
          courseName:'',
          courseTerm:'',
        })
      ).catch(function() {
        alert("Error adding a new assignment. Please try again.")
      });

      this.setState({
        courseId: '',
        assignmentNo: '',
        assignmentName: '',
        submissionDate: '',
        isForm: false,
      })
}


  render(){
    let form
    if(this.state.isForm){
      form = <div>
      <input type="text"
          name="courseId"
          ref="courseId"
          placeholder="Course ID"
          value={this.state.courseId}
          onChange={this.update.bind(this)}/>
      <br />
      <br />
      <input type="number" name="assignmentNo" ref="assignmentNo" placeholder="Assignment Number"
            onChange={this.update.bind(this)}/>
      <br />
      <br />
      <input type="text" name="assignmentName" ref="assignmentName" placeholder="Assignment Name"
            onChange={this.update.bind(this)}/>
      <br />
      <br />
      <label> Submission Date </label> <br />
      <input type="text" name="yyyy" ref="yyyy" placeholder="yyyy"
            onChange={this.update.bind(this)}/>
      <input type="text" name="mm" ref="mm" placeholder="mm"
            onChange={this.update.bind(this)}/>
      <input type="text" name="dd" ref="dd" placeholder="dd"
            onChange={this.update.bind(this)}/>
      <br />
      <br />
      <button onClick={this.handleClick.bind(this)}> Submit </button>
                </div>

    }

    return(
      <div>
        <h2> Select course to add assignment </h2>
        <UserTable
                   courses={this.state.courses}
                   onRowUpdate={this.handleRowUpdate.bind(this)} />
        {form}
      </div>
    );
  }
}

class UserTable extends React.Component {

  render() {
    var rowUpdate = this.props.onRowUpdate;
    var course = this.props.courses.map(function(course) {
      return (<CourseRow
        course={course}
        onRegisterEvent={rowUpdate.bind(this)}
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
              <th> Section </th>
              <th>Add assignment </th>
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

  onRegisterEvent() {
    this.props.onRegisterEvent(this.props.course);
  }


  render() {

    return (
      <tr className="eachRow">
        <td> {this.props.course.courseId} </td>
        <td> {this.props.course.courseName} </td>
        <td> {this.props.course.courseAbbr} </td>
        <td> {this.props.course.courseTerm} </td>
        <td> {this.props.course.courseLoc} </td>
        <td> {this.props.course.section} </td>
        <td className="del-cell">
          <input type="button" onClick={this.onRegisterEvent.bind(this)}
          value="Add" className="del-btn"/>
        </td>
      </tr>
    );
  }
}
