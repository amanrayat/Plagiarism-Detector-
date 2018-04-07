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

  // View Courses registered for:
  // http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentCourses?userId=201

  update(){
    this.setState({
      submissionID: this.refs.submissionID.value,
    })
  }


  handleClick(){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/deletSubmission?submissionId='+this.state.submissionID)
      .then(response => response.json())
  }

  render(){
    let submissions = this.state.submissions;
    return(
      <div>
        <h3> Enter submission ID to delete </h3>
        <input type="text" ref="submissionID"
              placeholder="Submission ID"
              onChange={this.update.bind(this)} />
        <button onClick={this.handleClick.bind(this)}> Delete </button>
        <div className={'container col-md-6 col-md-offset-3'}>
        <BootstrapTable data={submissions} striped bordered condensed hover>
          <TableHeaderColumn isKey dataField='submissionId'>Submission ID</TableHeaderColumn>
          <TableHeaderColumn dataField='assignmentName'>Assignment Name</TableHeaderColumn>
          <TableHeaderColumn dataField='courseAbbr'>Course Name</TableHeaderColumn>
          <TableHeaderColumn dataField='gitLink'>Git Link</TableHeaderColumn>
          <TableHeaderColumn dataField='submissionTime'>Due Date</TableHeaderColumn>
        </BootstrapTable>
        </div>
      </div>
    );
  }
}
