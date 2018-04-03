import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import UserList from './UserList.js'
import NewUser from './NewUser.js'

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

  render(){
    if(this.state.usersList){
      return (
        <div>
            <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
            <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
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
            <button className={'btn'}> <a href="/"> Logout </a> </button>
            <br />
            <br />
            <NewUser />
        </div>
      )
    }
    else{
      return(
        <div>
        <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
        <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
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
