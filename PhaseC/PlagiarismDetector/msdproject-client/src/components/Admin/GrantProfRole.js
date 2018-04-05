import React from 'react';
import ReactDOM from 'react-dom';

export default class GrantProfRole extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.users = [];
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

  handlerowUpdate(user) {
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/admin/user/'+user.userId, {
      method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         userRole: 'professor'
       })
     }).then(this.fetchUsers);
  };

  handleAdminUpdate(user){
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/admin/user/'+user.userId, {
      method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         userRole: 'admin'
       })
     }).then(this.fetchUsers);
  };

  render() {
    return (
      <div>
        <UserTable
        onrowUpdate={this.handlerowUpdate.bind(this)}
        onAdminUpdate={this.handleAdminUpdate.bind(this)}
        users={this.state.users} />
      </div>
    );
  }
}

class UserTable extends React.Component {

  render() {
    var rowUpdate = this.props.onrowUpdate;
    var adminUpdate = this.props.onAdminUpdate;
    var user = this.props.users.map(function(user) {
      return (<UserRow
        user={user}
        onGrantProfRole={rowUpdate.bind(this)}
        onMakeAdmin={adminUpdate.bind(this)}
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
              <th>Grant Professor Role </th>
              <th> Make Admin </th>
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
  onGrantProfRole() {
    this.props.onGrantProfRole(this.props.user);
  }

  onMakeAdmin() {
    this.props.onMakeAdmin(this.props.user);
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
          <input type="button" onClick={this.onGrantProfRole.bind(this)} value="GrantProfRole" className="del-btn"/>
        </td>
        <td className="del-cell">
          <input type="button" onClick={this.onMakeAdmin.bind(this)} value="GrantAdminRole" className="del-btn"/>
        </td>
      </tr>
    );
  }
}
