import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';

export default class AddNewCoursePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {createdCourseBy:this.props.userID,
                  courseAbbr: '',
                  courseLoc:'',
                  courseName:'',
                  courseTerm:''
                };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Handle click from Add new course")

    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/addCourse', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          createdCourseBy: this.state.createdCourseBy,
          courseAbbr: this.state.courseAbbr,
          courseLoc: this.state.courseLoc,
          courseName: this.state.courseName,
          courseTerm: this.state.courseTerm,
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
          alert("Error adding a new course. Please try again.")
        });
  }

  update(){
    this.setState({
      courseAbbr: this.refs.courseAbbr.value,
      courseLoc: this.refs.courseLoc.value,
      courseName: this.refs.courseName.value,
      courseTerm: this.refs.courseTerm.value,
    })
  }


  render(){
    console.log("userID",this.props.userID)
    return(
      <div className={'container col-md-6 col-md-offset-3'}>
        <h1> Add New Course </h1>
        <input type="text" ref="courseAbbr" placeholder="Course Abbreviation ex:CS5500"
                onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="text" name="courseLoc" ref="courseLoc" placeholder="Location"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="text" name="courseName" ref="courseName" placeholder="Course Name ex:Managing Software Development"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="text" name="courseTerm" ref="courseTerm" placeholder="Semester"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <button onClick={this.handleClick}> Submit </button>
      </div>
    );
  }
}
