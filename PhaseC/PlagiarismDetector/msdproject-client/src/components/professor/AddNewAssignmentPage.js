import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';

export default class AddNewAssignmentsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      courseId: '',
      assignmentNo: '',
      assignmentName: '',
      submissionDate: moment(),
      courses: [],
    }

  }

//   Add Assignment: POST
// http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/addAssignment
//
// {
// 	"courseId":42,
// 	"assignmentNo":1,
// 	"assignmentName":"Ass1",
// 	"submissionDate":"2018-04-06"
// }

update(date){
  this.setState({
    courseId: this.refs.courseId.value,
    assignmentNo: this.refs.assignmentNo.value,
    assignmentName: this.refs.assignmentName.value,
    submissionDate: date,
  })
  console.log("Submission Date:",this.state.submissionDate.toJSON())
}

handleClick(){
  console.log("On CLick")
  console.log("Date:",this.state.submissionDate.toJSON())
}


  render(){
    return(
      <div>
        <h1> AddNewAssignmentsPage </h1>
        <input type="text" ref="courseId" placeholder="Course ID"
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
        <DatePicker
              selected={this.state.submissionDate}
              onChange={this.update.bind(this)}
        />
        <br />
        <br />
        <button onClick={this.handleClick.bind(this)}> Submit </button>
      </div>
    );
  }
}
