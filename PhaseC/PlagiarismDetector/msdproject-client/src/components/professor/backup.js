import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import AssignmentsPage from './AssignmentsPage';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class ProfessorCoursePage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      courseId: '',
      assignmentId: '',
      threshold: '',
      courseAbbr: '',
      assignmentNo: '',
      submissions: '',
      reports: '',
      reportLinks: [],
      assignments: [],
      courses: [],
    };

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
      this.setState({
        courseAbbr: course.courseAbbr,
        courseId: course.courseId
      })

      fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/assignmentsByCourse?courseId='+course.courseId)
        .then(response => response.json())
        .then(data => this.setState({assignments: Object.values(data)[0],
                                      selectedCourse: course }));
      console.log("Assignments ",this.state.assignments)
    }



  getSubmissions(){
    console.log("From get submissions")
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208'+
    '/allSubmissionsByCourse?courseAbbr='+this.state.courseAbbr+'&assignmentNo='+this.state.assignmentNo)
      .then(response => response.json())
      .then(data => this.setState({submissions: data}))
      .catch(function() {
        alert("Failed to get submissions")
      });
      console.log("submissions1",this.state.submissions)

  }

  generateReport(){
    console.log("From Generate Reports")
    let submissions = this.state.submissions
    console.log("submissions2",JSON.stringify(this.state.submissions))
      fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/generateReport?courseId='+this.state.courseId+'&assignId='+this.state.assignmentId+'&threshold='+this.state.threshold, {
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
  }

//   http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/generateReport?courseId=1&assignId=1&threshold=90
//
//   REQUEST:
//   allsubmissions for assignemnt
// http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/allSubmissionsByCourse?courseAbbr=CS5500&assignmentNo=1

  update(){
    this.setState({
      courseId: this.refs.courseId.value,
      assignmentId: this.refs.assignmentId.value,
      threshold: this.refs.threshold.value,
      courseAbbr: this.refs.courseAbbr.value,
      assignmentNo: this.refs.assignmentNo.value,
    });
  }


  handleEmailClick(){
    let Var = [{ email: "tondarerachana@gmail.com"},
       {email: "bidre.v@husky.neu.edu"},
       {email: "tondare.r@husky.neu.edu"}];
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/Email', {
        method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(Var)
       }).then(response => response.json())
       .catch(function() {
         alert("Failed to Generate Reports")
       });
  }

  test() {
        let input = JSON.parse('{"Data":"{300,202,1,1=100.0,https://s3.amazonaws.com/plagiarismteam208/AllReports_1_1/results_300_202_1_1.zip}"}');
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
    console.log(result)
    this.setState({
      reportLinks: result
    })
    return result;
}

handleClick(){
  //Fetch Submissions
  // this.getSubmissions()
  // console.log("submissions3",JSON.stringify(this.state.submissions))
  //
  // // generate Reports
  // this.generateReport()
  // console.log("Reports1",this.state.reports)
  // console.log("Reports2",this.state.reports)
  this.test()

}

  render() {
    let status = "....";
    let reportsComp = ''
    if(this.state.reports){
      let data = this.state.reports.Data;
      let jsonData = this.test(data);
      // this.setState({
      //   reportLinks: jsonData[0]});
      // status = "Reports Generated"
    }
    let reportLinks = this.state.reportLinks
      // return(
      //   <div>
      //     <h1> Generate Reports here </h1>
      //     <h2>{this.state.reports.data} </h2>
      //   </div>
      // );
    // }
    // else
    return (
      <div className={'container text-center'}>
      <input type="text"ref="courseId"
            placeholder="Course ID"
            onChange={this.update.bind(this)} />
      <input type="text"ref="assignmentId"
            placeholder="assignmentId"
            onChange={this.update.bind(this)} />
      <input type="text"ref="courseAbbr"
            placeholder="Course Abbr"
            onChange={this.update.bind(this)} />
      <input type="text"ref="assignmentNo"
            placeholder="Assignment Number"
            onChange={this.update.bind(this)} />
      <input type="text"ref="threshold"
            placeholder="Threshold"
            onChange={this.update.bind(this)} />
      <button onClick={this.handleClick.bind(this)}> Check Plaigarism </button>
      <button onClick={this.handleEmailClick.bind(this)}> Email </button>
      <br />
      <h2> {status} </h2>

      <AssignmentsPage />
      <div className={'container col-md-6 col-md-offset-3'}>
      <BootstrapTable data={reportLinks} striped bordered condensed hover>
        <TableHeaderColumn dataField='id1'>Student ID 1</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='id2'>Student ID 2</TableHeaderColumn>
        <TableHeaderColumn dataField='s3Link'>Reports Link</TableHeaderColumn>
        <TableHeaderColumn dataField='percentage'>Percentage match</TableHeaderColumn>
      </BootstrapTable>
      </div>
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
        <table className="table table-bordered">
          <thead>
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

        </table>
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
          <input type="button" onClick={this.onDelAssignmentEvent.bind(this)}
          value="Delete"/>
        </td>
        <td>
          <input type="button" onClick={this.onUpdateAssignmentEvent.bind(this)}
          value="Update"/>
        </td>
      </tr>
    );
  }
}

export default ProfessorCoursePage
