import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CourseList from './CourseList'

export default class AssignmentsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      courseId: '',
      courseTerm: '',
      assignements: [],
      assignmentNo: '',
      assignmentName: '',
      submissionDate: '',
      courses: [],
      selectedCourse: '',
      isForm: false,
      courseAbbr: '',
      assignmentId: '',
      threshold: '',
      lang: '',
      submissions: [],
      reports: [],
      gotSubmissions: false,
      resultReports: [],
      userID: this.props.userID,
      user: [],
      terms: [],
      checkByTerms: false,
    }

    this.fetchCourses = this.fetchCourses.bind(this);
    this.fetchAssignments = this.fetchAssignments.bind(this);
    this.fetchEmailFromID = this.fetchEmailFromID.bind(this);
    this.fetchTermsByCourse = this.fetchTermsByCourse.bind(this);
  }

  fetchTermsByCourse(){
    console.log("From fetchTermsByCourse")
    console.log("Current Course Abbr:"+this.state.courseAbbr)
    let terms
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/CourseByAbbr?courseAbbr='+this.state.courseAbbr)
      .then(response => response.json())
      .then(data => this.setState({terms: data, checkByTerms: true}))
    console.log("Terms: ",this.state.terms)
    console.log("CheckByTerms: ", this.state.checkByTerms)
  }

  getSubmissionsPerTerm(){
    console.log("From getSubmissionsPerTerm")
    console.log("CheckByTerms: ", this.state.checkByTerms)
    console.log("Current Terms: ",this.state.terms)
    console.log("CourseAbbr: ",this.state.courseAbbr)
    console.log("Assignment Num:",this.state.assignmentNo)
    let terms = this.state.terms;
    console.log("Current Terms: ",terms)
    let postBody = {
      "courseAbbr": this.state.courseAbbr,
      "assignmentNo": this.state.assignmentNo,
      "term": terms
    }
    console.log("PostBody: ",JSON.stringify(postBody))
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allSubmissionsByCourseMultipleTerms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody)
       }).then(response => response.json())
       .then(data => this.setState({submissions: data,
                                   gotSubmissions: true}))
       .catch(function() {
         alert("Failed to fetch submissions")});
  }

  fetchCourses(){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  fetchEmailFromID(id){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/findStudent?userId='+id)
      .then(response => response.json())
      .then(data => this.setState({user: data.user}));
    console.log("Email:",this.state.user.email)
    return this.state.user.email
  }

  fetchAssignments(course){
    this.setState({
      courseId: course.courseId,
      courseAbbr: course.courseAbbr,
      courseTerm: course.courseTerm,
    })
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/assignmentsByCourse?courseId='+course.courseId)
      .then(response => response.json())
      .then(data => this.setState({assignments: Object.values(data)[0],
                                    selectedCourse: course }));
  }

  componentDidMount() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allCourses')
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
  }

  onUpdateAssignment(assignment){
    this.setState({
      isForm:true,
      assignmentNo: assignment.assignmentNo,
      assignmentId: assignment.assignmentId,
    })
  }

  handleFormSubmit(){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/updateAssignment', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: this.state.selectedCourse.courseId,
          assignmentNo: this.state.assignmentNo,
          assignmentName: this.state.assignmentName,
          submissionDate: this.state.submissionDate,
        })
      }).then(function(response) {
         return response.json();
       }).then(j =>
          this.setState({
            assignmentNo: '',
            assignmentName: '',
            submissionDate: '',
            isForm: false,
          })
        ).catch(function() {
          alert("Error updating a new assignment. Please try again.")
        });
  }

  update(){
    this.setState({
      threshold: this.refs.threshold.value,
      lang: this.refs.lang.value,
    });
  }

//TODO: Send term as an array!!
  getSubmissions(){
    console.log("From getSubmissions course term array:",this.state.courseTerm)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208'+
    '/allSubmissionsByCourse?courseAbbr='+this.state.courseAbbr+'&assignmentNo='+this.state.assignmentNo)
      .then(response => response.json())
      .then(data => this.setState({submissions: data,
                                  gotSubmissions: true}))
      .catch(function() {
        alert("Failed to get submissions")
      });
  }


  checkPlaigarism(){
    //Fetch Submissions
    this.getSubmissions()
  }

  test(input) {
        var data = input.Data.split(",");
        var result = [];
        for(var i = 0 ; i < data.length;){
          var j = 0;

        var temp = {
            "id1" : data[i].replace("{",""),
            "id2" : data[i + 1],
            "s3Link" : data[i + 4].replace("}",""),
            "percentage" : data[i + 3].split("=")[1]
        }
        i = i + 5;
        result.push(temp);

    }
    return result

}

  generateReport(){
    console.log("From generate Report")
    console.log("submissions",JSON.stringify(this.state.submissions))

    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/generateReport?courseId='+this.state.courseId+'&assignId='+this.state.assignmentId+'&threshold='+this.state.threshold+'&lang='+this.state.lang, {
      method: 'POST',
      mode: 'cors',
       headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*'
       },
       body: JSON.stringify(this.state.submissions)
     }).then(response => response.json())
     .then(data => this.setState({reports: data}))
     .catch(function() {
       alert("Failed to Generate Reports")
     });
     console.log("Reports1:",this.state.reports)
  }

  onEmailStudents(report){
    console.log("Student1:",report.id1)
    console.log("Student2:",report.id2)
    this.fetchEmailFromID(report.id1)
    this.fetchEmailFromID(report.id1)
    let student1Email = this.fetchEmailFromID(report.id1)
    let student2Email = this.fetchEmailFromID(report.id2)
    let postBody = [{
		    "email": student1Email,
		    "content": "CAUGHT",
		    "link":""
	   },
	   {
		     "email": student2Email,
		     "content": "CAUGHT",
		     "link":""
	   }]
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/Email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      },
      body: JSON.stringify(postBody)
     }).then(response => response.json())
     .catch(function() {
       alert("Failed to send Email")});
  }

  onEmailReports(report){
    console.log("s3Link:",report.s3Link)
    console.log("Prof ID:",this.state.userID)
    console.log("FROM EMAIL REPORTS:",this.fetchEmailFromID(this.state.userID))
    let profEmail = this.fetchEmailFromID(this.state.userID)
    let postBody = [{
		    "email": profEmail,
		    "content": "REPORT",
		    "link": report.s3Link
	   }]
     fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/Email', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin':'*'
       },
        body: JSON.stringify(postBody)
      }).then(response => response.json())
      .catch(function() {
        alert("Failed to send Email")});
  }

  render(){
    let courses = this.state.courses
    let assignments = this.state.assignments
    let assignmentsComp
    let form
    let generateReport
    let generatingReports
    let viewReports
    let generateReportByTerms =  <button onClick={this.checkPlaigarism.bind(this)}> Fetch Submissions </button>


    if(this.state.checkByTerms){
      generateReportByTerms = <button onClick={this.getSubmissionsPerTerm.bind(this)}> Fetch Submissions per Terms </button>
    }

    if(this.state.gotSubmissions){
      generateReport = <button onClick={this.generateReport.bind(this)}> Generate Reports </button>
      generatingReports = <h1> Click on Generate Reports and please wait while reports are being generated. </h1>
    }

    if(this.state.reports.length!=0){
      let reportLinks = this.test(this.state.reports)
      generatingReports = <div> <h1> Reports Generated! </h1>
      <ReportTable reports={reportLinks}
                    onEmailStudents={this.onEmailStudents.bind(this)}
                    onEmailReports={this.onEmailReports.bind(this)}/>
       </div>
    }

    if(this.state.isForm){
      form =
      <div className={'container text-center'}>
      <input type="text" ref="threshold"
            placeholder="Threshold"
            onChange={this.update.bind(this)} />
      <select ref="lang" value={this.state.lang} onChange={this.update.bind(this)}>
        <option value="java17">Java</option>
        <option value="python3">Python</option>
      </select>
      <button onClick={this.fetchTermsByCourse.bind(this)}> Fetch Terms</button>
      {generateReportByTerms}
      </div>
    }

    if(this.state.assignments) {
      assignmentsComp = <AssignmentTable
                        assignments={this.state.assignments}
                        onAssignmentUpdate={this.onUpdateAssignment.bind(this)} />
    }

    return(
      <div>
        <CourseTable
          onViewAssignments={this.fetchAssignments.bind(this)}
          courses={this.state.courses}/>
        {assignmentsComp}
        {form}
        {generateReportByTerms}
        {generateReport}
        {generatingReports}
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
    var rowUpdate = this.props.onAssignmentUpdate;
    var assignment = this.props.assignments.map(function(assignment) {
      return (<AssignmentRow
        onUpdateAssignmentEvent={rowUpdate.bind(this)}
        assignment={assignment}
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
              <th> Udpate </th>
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
          <input type="button" onClick={this.onUpdateAssignmentEvent.bind(this)}
          value="Check Plaigarism"/>
        </td>
      </tr>
    );
  }
}


class ReportTable extends React.Component {

  render() {
    var onEmailStudents = this.props.onEmailStudents;
    var onEmailReports = this.props.onEmailReports;
    var report = this.props.reports.map(function(report) {
      return (<ReportRow
        report={report}
        onEmailStudents={onEmailStudents.bind(this)}
        onEmailReports={onEmailReports.bind(this)}
        key={report.id}/>)
    });

    return (
      <div>
        <table className="table table-bordered">
          <thead /*style={{backgroundColor: '#cbd0d6'}}*/>
            <tr>
              <th>Student ID1</th>
              <th>Student ID2</th>
              <th>s3Link</th>
              <th>Percentage match</th>
              <th> Email Students </th>
              <th> Email Reports </th>
            </tr>
          </thead>

          <tbody /*style={{backgroundColor: '#f2f2f2'}}*/>
            {report}
          </tbody>

        </table>
      </div>
    );
  }
}


class ReportRow extends React.Component {

  onEmailStudents() {
    this.props.onEmailStudents(this.props.report)
  }

  onEmailReports(){
    this.props.onEmailReports(this.props.report)
  }

  render() {
    return (
      <tr className="eachRow">
        <td> {this.props.report.id1} </td>
        <td> {this.props.report.id2} </td>
        <td> <a href={this.props.report.s3Link}> {this.props.report.s3Link} </a> </td>
        <td> {this.props.report.percentage} </td>
        <td>
          <input type="button" onClick={this.onEmailStudents.bind(this)} value="Send"/>
        </td>
        <td>
          <input type="button" onClick={this.onEmailReports.bind(this)} value="Send"/>
        </td>
      </tr>
    );
  }
}
