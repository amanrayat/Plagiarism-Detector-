import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class ViewAllSubmissions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userID: this.props.userID,
      submissions: [],
    }
  }

  componentDidMount() {
    console.log("UserID from view all courses per student ", this.state.userID)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentSubmissions?userId='+this.state.userID)
      .then(response => response.json())
      .then(data => this.setState({submissions: data}));
  }

  //  API to use: http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentSubmissions?userId=201

  render(){
    console.log("userId: ",this.state.userID)
    const submissions = this.state.submissions;
    console.log("Submissions: ",submissions)
    return(
      <div>
      <h3> My Submisssions </h3>
      <div className={'container col-md-6 col-md-offset-3'}>
      <BootstrapTable data={submissions} striped bordered condensed hover>
        <TableHeaderColumn dataField='submissions[iskey].assignmentId.assignmentId'>CourseId</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
    );
  }
}
