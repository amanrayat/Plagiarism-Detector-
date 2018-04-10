import React from 'react';

export default class NewSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: '',
      assignmentID: '',
      gitLink: '',
      studentId: this.props.userID,
      assignments: [],
      courses: [],
      userID: this.props.userID,
      submitAssignmentId: '',
      isForm: false,
    };
    // this.handleClick = this.handleClick.bind(this)
  }

//   http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission
//  REQUEST:
//
// {
// 	"assignmentId" : 5,
// 	"studentId": 201,
// 	"gitLink": "https://github.com/enrolled02/python-crawler1"
//
// }

componentDidMount() {
  console.log("UserID from view all courses per student ", this.state.userID)
  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentCourses?userId='+this.state.userID)
    .then(response => response.json())
    .then(data => this.setState({courses: data}));
  console.log("Courses",this.state.courses)
}

fetchAssignments(course){
  console.log("Course ID",course.courseId)
  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/assignmentsByCourse?courseId='+course.courseId)
    .then(response => response.json())
    .then(data => this.setState({assignments: Object.values(data)[0],
                                  selectedCourse: course }));
  console.log("Assignments ",this.state.assignments)
}

update(){
  this.setState({
    gitLink: this.refs.gitLink.value,
  })
}

onMakeSubmission(assignment){
  console.log("Assignent ID",assignment.assignmentId)
  this.setState({
    submitAssignmentId: assignment.assignmentId,
    isForm: true,
  })
}

handleClick(){
  console.log(this.state.submitAssignmentId)
  console.log(this.state.studentId)
  console.log(this.state.gitLink)
  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assignmentId: this.state.submitAssignmentId,
        studentId: this.state.studentId,
        gitLink: this.state.gitLink,
      })
    }).then(function(response) {
       return response.json();
     }).then(j =>
        // console.log(Object.values(j)[1].name);
        this.setState({
          submitAssignmentId: '',
          studentId: '',
          gitLink: '',
          isForm: false
        })
      ).catch(function() {
        alert("Error adding a new course. Please try again.")
      });
}

render() {

  let table
  let assignmentsComp
  let form

  let courses = this.state.courses;

  if(courses){
    table = <UserTable courses={this.state.courses}
    onViewAssignments={this.fetchAssignments.bind(this)}
    />
  }

  if(this.state.assignments) {
    assignmentsComp = <AssignmentTable
                      onSubmitAssignment={this.onMakeSubmission.bind(this)}
                      assignments={this.state.assignments} />
  }

  if(this.state.isForm){
    form = <div>
    <input type="text" ref="gitLink" placeholder="GitLink"
          onChange={this.update.bind(this)}/>
    <button onClick={this.handleClick.bind(this)}> Submit </button>
    </div>
  }

  return (
    <div>
    {table}
    {assignmentsComp}
    {form}
    </div>
  );
}
}


class UserTable extends React.Component {

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

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Course Name</th>
              <th>Term</th>
              <th>Location</th>
              <th>View Assignments</th>
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
        <td>
          <input type="button" onClick={this.onClickEvent.bind(this)}
          value="View Assignments"/>
        </td>
      </tr>
    );
  }
}


class AssignmentTable extends React.Component {

  render() {
    var rowSubmit = this.props.onSubmitAssignment;
    var assignment = this.props.assignments.map(function(assignment) {
      return (<AssignmentRow
        assignment={assignment}
        onSubmitAssignmentEvent={rowSubmit.bind(this)}
        key={assignment.id}/>)
    });

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Assignment ID</th>
              <th>Assignment Number</th>
              <th>Assignment Name</th>
              <th>Submission Date</th>
              <th> Make Submission </th>
            </tr>
          </thead>

          <tbody>
            {assignment}
          </tbody>

        </table>
      </div>
    );
  }
}


class AssignmentRow extends React.Component {

  onSubmitAssignmentEvent(){
    this.props.onSubmitAssignmentEvent(this.props.assignment)
  }

  render() {
    return (
      <tr className="eachRow">
        <td> {this.props.assignment.assignmentId} </td>
        <td> {this.props.assignment.assignmentNo} </td>
        <td> {this.props.assignment.assignmentName} </td>
        <td> {this.props.assignment.submissionDate} </td>
        <td>
          <input type="button" onClick={this.onSubmitAssignmentEvent.bind(this)}
          value="Submit"/>
        </td>
      </tr>
    );
  }
}
