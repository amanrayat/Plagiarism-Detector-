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
    console.log("Course Abbr:",course.courseAbbr)
    this.setState({
      courseId: course.courseId,
      courseAbbr: course.courseAbbr,
    })
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

  onUpdateAssignment(assignment){
    console.log("Assignment No:",assignment.assignmentNo)
    console.log("Assignment ID:",assignment.assignmentId)
    this.setState({
      isForm:true,
      assignmentNo: assignment.assignmentNo,
      assignmentId: assignment.assignmentId,
    })
  }

  handleFormSubmit(){
    console.log("Updating Assignment with date",this.state.submissionDate)
    console.log("Selected Course ID", this.state.selectedCourse.courseId)
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
          // console.log(Object.values(j)[1].name);
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

  getSubmissions(){
    console.log("From get submissions")
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208'+
    '/allSubmissionsByCourse?courseAbbr='+this.state.courseAbbr+'&assignmentNo='+this.state.assignmentNo)
      .then(response => response.json())
      .then(data => this.setState({submissions: data,
                                  gotSubmissions: true}))
      .catch(function() {
        alert("Failed to get submissions")
      });
      console.log("submissions1",this.state.submissions)
  }


  checkPlaigarism(){
    console.log("Course Abbr:",this.state.courseAbbr)
    console.log("Assignment No:",this.state.assignmentNo)
    console.log("Course ID:",this.state.courseId)
    console.log("Assignment ID:",this.state.assignmentId)
    console.log("Threshold:",this.state.threshold)
    console.log("Lang:",this.state.lang)

    //Fetch Submissions
    this.getSubmissions()
    console.log("submissions",JSON.stringify(this.state.submissions))
    //
    // // generate Reports
    // this.generateReport()
    // console.log("Reports1",this.state.reports)
    // console.log("Reports2",this.state.reports)
  }

  test(input) {
        /*let input = JSON.parse('{"Data":"{300,202,1,1=100.0,https://s3.amazonaws.com/plagiarismteam208/AllReports_1_1/results_300_202_1_1.zip}"}');*/
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
    console.log("Result:",result)

    return result

}

  generateReport(){
    console.log("from generate reports!!")
    console.log("Course Abbr:",this.state.courseAbbr)
    console.log("Assignment No:",this.state.assignmentNo)
    console.log("Course ID:",this.state.courseId)
    console.log("Assignment ID:",this.state.assignmentId)
    console.log("Threshold:",this.state.threshold)
    console.log("Lang:",this.state.lang)
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
     console.log("Reports1 length:",this.state.reports.length)

  }



  render(){
    let courses = this.state.courses
    let assignments = this.state.assignments
    let assignmentsComp
    let form
    let generateReport
    let generatingReports
    let viewReports

    if(this.state.gotSubmissions){
      generateReport = <button onClick={this.generateReport.bind(this)}> Generate Reports </button>
      console.log("Reports2:",this.state.reports)
      console.log("Reports2 length:",this.state.reports.length)
      generatingReports = <h1> Generating Reports. Please wait. </h1>
    }

    if(this.state.reports.length!=0){
      console.log("Reports3:",this.state.reports)
      console.log("Reports3 length:",this.state.reports.length)
      let reportLinks = this.test(this.state.reports)
      generatingReports = <div> <h1> Reports Generated! </h1>
      <ReportTable reports={reportLinks} />
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
      <button onClick={this.checkPlaigarism.bind(this)}> Fetch Submissions </button>
      </div>
    }

    if(this.state.assignments) {
      assignmentsComp = <AssignmentTable
                        assignments={this.state.assignments}
                        onAssignmentUpdate={this.onUpdateAssignment.bind(this)} />
    }

    console.log("Courses",this.state.courses)
    return(
      <div>
        <CourseTable
          onViewAssignments={this.fetchAssignments.bind(this)}
          courses={this.state.courses}/>
        {assignmentsComp}
        {form}
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
    var report = this.props.reports.map(function(report) {
      return (<ReportRow
        report={report}
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

  render() {

    return (
      <tr className="eachRow">
        <td> {this.props.report.id1} </td>
        <td> {this.props.report.id2} </td>
        <td> <a href={this.props.report.s3Link}> {this.props.report.s3Link} </a> </td>
        <td> {this.props.report.percentage} </td>
      </tr>
    );
  }
}
