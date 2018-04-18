import React from 'react';
import ReactDOM from 'react-dom';
import CourseList from './CourseList'
import { Button , Table} from 'react-bootstrap';


export default class AssignmentsPage extends React.Component {
  constructor(){
    super();

    this.state = {
      courseId: '',
      assignements: [],
      assignmentId: '',
      assignmentNo: '',
      assignmentName: '',
      submissionDate: '',
      courses: [],
      selectedCourse: '',
      isForm: false
    }

    this.fetchCourses = this.fetchCourses.bind(this);
    this.fetchAssignments = this.fetchAssignments.bind(this);

  }

  fetchCourses(){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  fetchAssignments(course){
    console.log("Course ID",course.courseId)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/assignmentsByCourse?courseId='+course.courseId)
      .then(response => response.json())
      .then(data => this.setState({assignments: Object.values(data)[0],
                                    selectedCourse: course }));
    console.log("Assignments ",this.state.assignments)
  }

  componentDidMount() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  deleteAssignment(assignment){
    console.log("Deleting Assignment ",assignment.assignmentId)
    console.log("Selected Course ID", this.state.selectedCourse.courseId)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/deletAssignment?assignmentId='+assignment.assignmentId)
    .then(this.fetchAssignments(this.state.selectedCourse))
  }

  onUpdateAssignment(assignment){

    this.setState({
      isForm:true,
      assignmentId:assignment.assignmentId
    })
  }

  handleFormSubmit(){
    console.log("On assignment update")
    console.log("AssignmentID :",this.state.assignmentId)
    console.log("courseId :",this.state.selectedCourse.courseId)
    console.log("AssignmentNo :",this.state.assignmentNo)
    console.log("AssignmentName :",this.state.assignmentName)
    console.log("submissionDate :",this.state.submissionDate+"-00:00:00")
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/updateAssignment', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
	        assignmentId: this.state.assignmentId,
          courseId: this.state.selectedCourse.courseId,
          assignmentNo: this.state.assignmentNo,
          assignmentName: this.state.assignmentName,
          submissionDate: this.state.submissionDate+"-00:00:00",
        })
      }).then(function(response) {
         return response.json();
       }).then(this.fetchAssignments(this.state.selectedCourse))
       .then(this.setState({
         isForm: false
       }))
       .catch(function() {
          alert("Error updating a new assignment. Please try again.")
        });
  }

  update(){
    this.setState({
      courseId: this.refs.courseID.value
    });
  }

  formUpdate(){
    this.setState({
      courseId: this.refs.courseId.value,
      assignmentNo: this.refs.assignmentNo.value,
      assignmentName: this.refs.assignmentName.value,
      submissionDate: this.refs.yyyy.value+"-"+this.refs.mm.value+"-"+this.refs.dd.value,
    })
    console.log("Submission Date:",this.state.submissionDate)
  }

  render(){
    let courses = this.state.courses
    let assignments = this.state.assignments
    let assignmentsComp
    let form

    if(this.state.isForm){
      form =
      <div class={'container col-md-6 col-md-offset-3'}>
        <form>
          <div class="form-group">
            <label> Course ID:</label>
            <input type="text"
                class="form-control"
                name="courseId"
                ref="courseId"
                placeholder="Course ID"
                value={this.state.selectedCourse.courseId}
                onChange={this.formUpdate.bind(this)}/>
          </div>
          <div class="form-group">
            <label> Assignemnt Number:</label>
            <input class="form-control" type="number" name="assignmentNo" ref="assignmentNo" placeholder="Assignment Number"
                  onChange={this.formUpdate.bind(this)}/>
          </div>
          <div class="form-group">
            <label>Assignment Name: </label>
            <input class="form-control" type="text" name="assignmentName" ref="assignmentName" placeholder="Assignment Name"
                  onChange={this.formUpdate.bind(this)}/>
          </div>
          <div class="form-group">
            <label> Submission Date: </label>
            <input type="text" name="yyyy" ref="yyyy" placeholder="yyyy"
                  onChange={this.formUpdate.bind(this)}/>
            <input type="text" name="mm" ref="mm" placeholder="mm"
                  onChange={this.formUpdate.bind(this)}/>
            <input type="text" name="dd" ref="dd" placeholder="dd"
                  onChange={this.formUpdate.bind(this)}/>
          </div>
          <div class={'container text-center'}>
            <Button onClick={this.handleFormSubmit.bind(this)}> Submit </Button>
          </div>
        </form>
      </div>
    }

    if(this.state.assignments) {
      assignmentsComp = <AssignmentTable
                        assignments={this.state.assignments}
                        onAssignmentUpdate={this.onUpdateAssignment.bind(this)}
                        onAssignmentDel={this.deleteAssignment.bind(this)}
                        />
    }
    console.log("Courses",this.state.courses)
    return(
      <div>
        <CourseTable
          onViewAssignments={this.fetchAssignments.bind(this)}
          courses={this.state.courses}/>
        {assignmentsComp}
        {form}
      </div>
    );
  }
}

class CourseTable extends React.Component {

  render() {
    var viewAssignments = this.props.onViewAssignments;
    var course = this.props.courses.map(function(course) {
      return (<CourseRow
        course={course}
        onRowViewAssignments={viewAssignments.bind(this)}
        key={course.id}/>)
    });

    return (
      <div>
        <Table className="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Course Name</th>
              <th>Term</th>
              <th>Location</th>
              <th> Section </th>
              <th>View Assignments</th>
            </tr>
          </thead>

          <tbody>
            {course}
          </tbody>

        </Table>
      </div>
    );
  }
}


class CourseRow extends React.Component {

  onClickEvent(){
    this.props.onRowViewAssignments(this.props.course);
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
        <td>
          <Button onClick={this.onClickEvent.bind(this)}>View Assignments</Button>
        </td>
      </tr>
    );
  }
}

class AssignmentTable extends React.Component {

  render() {
    var rowDel = this.props.onAssignmentDel;
    var rowUpdate = this.props.onAssignmentUpdate;
    var assignment = this.props.assignments.map(function(assignment) {
      return (<AssignmentRow
        onDelAssignmentEvent={rowDel.bind(this)}
        onUpdateAssignmentEvent={rowUpdate.bind(this)}
        assignment={assignment}
        key={assignment.id}/>)
    });

    return (
      <div>
        <Table className="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Assignment ID</th>
              <th>Assignment Number</th>
              <th>Assignment Name</th>
              <th>Submission Date</th>
              <th> Delete </th>
              <th> Udpate </th>
            </tr>
          </thead>

          <tbody>
            {assignment}
          </tbody>

        </Table>
      </div>
    );
  }
}


class AssignmentRow extends React.Component {

  onDelAssignmentEvent(){
    this.props.onDelAssignmentEvent(this.props.assignment)
  }

  onUpdateAssignmentEvent(){
    this.props.onUpdateAssignmentEvent(this.props.assignment)
  }

  render() {
    return (
      <tr className="eachRow">
        <td> {this.props.assignment.assignmentId} </td>
        <td> {this.props.assignment.assignmentNo} </td>
        <td> {this.props.assignment.assignmentName} </td>
        <td> {this.props.assignment.submissionDate} </td>
        <td>
          <Button onClick={this.onDelAssignmentEvent.bind(this)}>Delete</Button>
        </td>
        <td>
          <Button onClick={this.onUpdateAssignmentEvent.bind(this)}>Update</Button>
        </td>
      </tr>
    );
  }
}
