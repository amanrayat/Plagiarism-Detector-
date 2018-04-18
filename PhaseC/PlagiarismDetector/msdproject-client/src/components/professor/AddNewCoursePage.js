import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

export default class AddNewCoursePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {createdCourseBy:this.props.userID,
                  courseAbbr: '',
                  courseLoc:'',
                  courseName:'',
                  courseTerm:'',
                  section: [1],
                  isSecondSection: false
                };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Handle click from Add new course")
    console.log("Section :",this.state.section)
    console.log("CourseName:",this.state.courseName)
    console.log("")
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
          sections: this.state.section,
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
            section: [1],
            isSecondSection: false
          })
        ).catch(function() {
          alert("Error adding a new course. Please try again.")
        });
  }

  update(event){
    const target = event.target;
    let sectionValue
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if(value){
      sectionValue = [2]
    }
    else{
      sectionValue = [1]
    }
    console.log("Second section: ", value)
    console.log("Section: ",sectionValue)
    const name = target.name;
    console.log("Target Name:",name)
    this.setState({
      courseAbbr: this.refs.courseAbbr.value,
      courseLoc: this.refs.courseLoc.value,
      courseName: this.refs.courseName.value,
      courseTerm: this.refs.courseTerm.value,
      isSecondSection: value,
      section: sectionValue,
    })

  }


  render(){
    console.log("userID",this.props.userID)
    return(
      <div class={'container col-md-6 col-md-offset-3'}>
        <h1 class={'text-center'}> Add New Course </h1>
        <form>
          <div class="form-group">
            <label> Course Abbreviation: </label>
            <input type="text" class="form-control" ref="courseAbbr" placeholder="Course Abbreviation ex:CS5500"
                    onChange={this.update.bind(this)}/>
          </div>
          <div class="form-group">
            <label> Course Location: </label>
            <input type="text" class="form-control" name="courseLoc" ref="courseLoc" placeholder="Location"
                  onChange={this.update.bind(this)}/>
          </div>
          <div class="form-group">
            <label> Couser Name: </label>
            <input type="text" class="form-control" name="courseName" ref="courseName" placeholder="Course Name ex:Managing Software Development"
                  onChange={this.update.bind(this)}/>
          </div>
          <div class="form-group">
            <label> Course Term: </label>
            <input type="text" class="form-control" name="courseTerm" ref="courseTerm" placeholder="Semester"
                  onChange={this.update.bind(this)}/>
          </div>
          <div class="form-group">
            <label>
            <input type="checkbox"  name="isSecondSection" checked={this.state.isSecondSection}
                  onChange={this.update.bind(this)}/> Add second section </label>
          </div>
          <div class={'container text-center'}>
          <Button onClick={this.handleClick}> Submit </Button>
          </div>
        </form>
      </div>
    );
  }
}
