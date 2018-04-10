import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class UpdateUser extends React.Component{

  constructor(){
    super();

    this.state = {users: [], userID:'', univID:'', name:'', userRole:'', password:'', email:'', successMessage: false};

    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/all')
      .then(response => response.json())
      .then(data => this.setState({users: data}));
  }

  fetchUsers() {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/all')
      .then(response => response.json())
      .then(data => this.setState({users: data}));
  }

  handleUpdate(user) {
    console.log("User ID from update",user.userId)
     this.setState({
       userID: user.userId,
       name: user.name,
       userRole: user.userRole,
       password: user.password,
       email: user.email,
     })
       console.log("User ID from update",this.state.userID)
  };

  handleClick() {
    console.log("User ID",this.state.userID)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/updateUser', {
      method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         userId: this.state.userID,
	       name : this.state.name,
	       userRole: this.state.userRole,
	       password: this.state.password,
	       email: this.state.email,
       })
     }).then(this.fetchUsers);
     this.setState({
       userID: '',
       name: '',
       userRole: '',
       password: '',
       email: '',
     })
  };

  update(){
    this.setState({
      name: this.refs.name.value,
      password: this.refs.password.value,
      email: this.refs.email.value
    })
  }

  handleUserRole(event) {
    this.setState({
      userRole: event.target.value
    })
  }

  render(){
    return (
      <div className={'container col-md-6 col-md-offset-3'}>
        <input type="text" name="name" ref="name" placeholder="Name"
              value={this.state.name}
              onChange={this.update.bind(this)} />
        <br />
        <input type="email" name="email" ref="email" placeholder="Email"
              value={this.state.email}
              onChange={this.update.bind(this)} />
        <br />
        <input type="password" name="password" ref="password" placeholder="Password"
              value={this.state.password}
              onChange={this.update.bind(this)} />
        <br />
        <input type="radio" name="role" ref="studentRole" value="student"
                checked={this.state.userRole === 'student'}
                onChange={this.handleUserRole.bind(this)} /> <label>Student    </label>
        <input type="radio" name="role" ref="profRole" value="professor"
              checked={this.state.userRole === 'professor'}
              onChange={this.handleUserRole.bind(this)} /> <label>Professor</label>
        <h2> {this.state.successMessage} </h2>
        <button onClick={this.handleClick.bind(this)}> Update </button>
        <UserTable
          onUpdateUser={this.handleUpdate.bind(this)}
          users={this.state.users}/>
      </div>
    );
  }
}

class UserTable extends React.Component {

  render() {
    var updateUser = this.props.onUpdateUser;
    var user = this.props.users.map(function(user) {
      return (<UserRow
        user={user}
        onUpdateUser={updateUser.bind(this)}
        key={user.id}/>)
    });

    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Password</th>
              <th>Email ID</th>
              <th>Edit </th>
            </tr>
          </thead>

          <tbody>
            {user}
          </tbody>

        </table>
      </div>
    );
  }
}


class UserRow extends React.Component {

  onUpdateUser() {
    this.props.onUpdateUser(this.props.user);
  }

  render() {

    return (
      <tr className="eachRow">
        <td> {this.props.user.userId} </td>
        <td> {this.props.user.name} </td>
        <td> {this.props.user.userRole} </td>
        <td> {this.props.user.password} </td>
        <td> {this.props.user.email} </td>
        <td className="del-cell">
          <input type="button" onClick={this.onUpdateUser.bind(this)} value="Edit" className="del-btn"/>
        </td>
      </tr>
    );
  }
}
