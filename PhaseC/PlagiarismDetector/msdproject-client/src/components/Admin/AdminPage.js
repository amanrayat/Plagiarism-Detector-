import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import UserList from './UserList.js'
import NewUser from './NewUser.js'
import AdminNavBar from './AdminNavBar.js'
import DeleteUser from './DeleteUser.js'
import GrantProfRole from './GrantProfRole.js'

class AdminPage extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      usersList: false,
      newUser: false,
      grantProfRole: false,
      deleteUser: false,
      updateUser: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.grantProfRole = this.grantProfRole.bind(this);
  }

  handleClick(){
    this.setState({
      usersList: true,
      newUser: false,
      grantProfRole: false,
      deleteUser: false,
      updateUser: false
    })
  }

  registerUser(){
    this.setState({
      usersList: false,
      newUser: true,
      grantProfRole: false,
      deleteUser: false,
      updateUser: false
    })
  }

  updateUser(){
    this.setState({
      usersList: false,
      newUser: false,
      grantProfRole: false,
      deleteUser: false,
      updateUser: true
    })
  }

  deleteUser(){
    this.setState({
      usersList: false,
      newUser: false,
      grantProfRole: false,
      deleteUser: true,
      updateUser: false
    })
  }

  grantProfRole(){
    this.setState({
      usersList: false,
      newUser: false,
      grantProfRole: true,
      deleteUser: false,
      updateUser: false
    })
  }



  render(){
    if(this.state.usersList){
      return (
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <UserList />
        </div>
      )
    }
    else if(this.state.newUser){
      return (
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <NewUser />
        </div>
      )
    }
    else if(this.state.deleteUser){
      return (
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <h1> Delete User!! </h1>
          <DeleteUser />
        </div>
      )
    }
    else if(this.state.updateUser){
      return (
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <h1> Update User!! </h1>
        </div>
      )
    }
    else if(this.state.grantProfRole){
      return (
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <GrantProfRole />
        </div>
      )
    }
    else{
      return(
        <div>
          <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
          <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
          <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
          <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
          <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
          <button className={'btn'}> <a href="/"> Logout </a> </button>
          <br />
          <br />
          <UserList />
        </div>
      )
    }
  }
}

export default AdminPage
