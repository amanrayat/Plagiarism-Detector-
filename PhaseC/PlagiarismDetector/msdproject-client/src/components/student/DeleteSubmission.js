import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ViewAllSubmissions from './ViewAllSubmissions'

export default class DeleteSubmission extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userID: this.props.userID,
      submissionID: '',
      submissions: []
    }
  }

  componentDidMount() {
    console.log("UserID from view all courses per student ", this.state.userID)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentSubmissions?userId='+this.props.userID)
      .then(response => response.json())
      .then(data => this.setState({submissions: data}));
    console.log("Submissions",this.state.submissions)
  }

  fetchSubmissions(userID){
    console.log("User ID from fetch submissions: ",userID)

    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentSubmissions?userId='+userID)
      .then(response => response.json())
      .then(data => this.setState({submissions: data}));
  }


  handleRowDel(submission) {
    console.log("Submission ID from submissions:",submission.submissionId)
    console.log("User ID: ",this.state.userID)
    let userID = this.state.userID
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/deletSubmission?submissionId='+submission.submissionId)
        .then(this.fetchSubmissions(userID));
  };

  handleRowUpdate(submission){
    console.log("Updating Submission:",submission.submissionId)
  }

  render(){
    let submissions = this.state.submissions;
    console.log("Submisiions: ",submissions)
    console.log("user:",this.state.userID)
    return(
      <div>
        <UserTable onRowDel={this.handleRowDel.bind(this)}
        onRowUpdate={this.handleRowUpdate.bind(this)}
        submissions={this.state.submissions} />
      </div>
    );
  }
}

class UserTable extends React.Component {

  render() {
    var rowDel = this.props.onRowDel;
    var rowUpdate = this.props.onRowUpdate;
    var submission = this.props.submissions.map(function(submission) {
      return (<UserRow  submission={submission}
        onDelEvent={rowDel.bind(this)}
        onUpdateEvent = {rowUpdate.bind(this)}
        key={submission.id}/>)
    });
    return (
      <div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Submission ID</th>
              <th>Assignment Name</th>
              <th>Course Name</th>
              <th>Git Link</th>
              <th>Due Date</th>
              <th> Delete </th>
              <th> Update Link </th>
            </tr>
          </thead>

          <tbody>
            {submission}
          </tbody>

        </table>
      </div>
    );
  }
}

class UserRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.submission);
  }

  onUpdateEvent() {
    this.props.onUpdateEvent(this.props.submission);
  }

  render() {

    return (
      <tr className="eachRow">
        <td> {this.props.submission.submissionId} </td>
        <td> {this.props.submission.assignmentName} </td>
        <td> {this.props.submission.courseAbbr} </td>
        <td> <a> {this.props.submission.gitLink} </a> </td>
        <td> {this.props.submission.submissionTime} </td>
        <td>
          <input type="button" onClick={this.onDelEvent.bind(this)} value="Delete" />
        </td>
        <td>
          <input type="button" onClick={this.onUpdateEvent.bind(this)} value="Update" />
        </td>
      </tr>
    );
  }
}
