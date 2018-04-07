import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class UserList extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/all')
      .then(response => response.json())
      .then(data => this.setState({users: data}));
  }

  updateProfessorRole() {
    console.log("Clicked on Update Role");
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/registerUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: this.state.univID,
          name: this.state.name,
          userRole: this.state.userRole,
          password: this.state.password,
          email: this.state.email,
        })
      }).then(function(response) {
	       return response.json();
       }).then(j =>
          this.setState({
            successMessage: "Saved!"
          })
        );
  }

  render(){
    const users = this.state.users;
    return (
      <div>
      <div className={'container col-md-6 col-md-offset-3'}>
      <BootstrapTable data={users} striped bordered condensed hover>
        <TableHeaderColumn dataField='userId'>UserID</TableHeaderColumn>
        <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='userRole'>Role</TableHeaderColumn>
      </BootstrapTable>
      </div>
      </div>
    );
  }
}

export default UserList
