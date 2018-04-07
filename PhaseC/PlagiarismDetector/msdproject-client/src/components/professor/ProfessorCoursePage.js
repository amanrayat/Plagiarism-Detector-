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
    };
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
        <TableHeaderColumn dataField='s3Link' href='s3Link'>Reports Link</TableHeaderColumn>
        <TableHeaderColumn dataField='percentage'>Percentage match</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
  );
  }
}

export default ProfessorCoursePage
