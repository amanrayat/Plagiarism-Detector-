import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';
import UserList from './UserList.js'
import NewUser from './NewUser.js'
import DeleteUser from './DeleteUser.js'
import GrantProfRole from './GrantProfRole.js'
import UpdateUser from './UpdateUser.js'


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
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <UserList />
        </div>
      )
    }
    else if(this.state.newUser){
      return (
        <div>
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <NewUser />
        </div>
      )
    }
    else if(this.state.deleteUser){
      return (
        <div>
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <DeleteUser />
        </div>
      )
    }
    else if(this.state.updateUser){
      return (
        <div>
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <UpdateUser />
        </div>
      )
    }
    else if(this.state.grantProfRole){
      return (
        <div>
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <GrantProfRole />
        </div>
      )
    }
    else{
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.handleClick}> Users List </Button>
          <Button className={'bsStyle="success"'} onClick={this.registerUser}> New User </Button>
          <Button className={'bsStyle="info"'} onClick={this.updateUser}> Update User </Button>
          <Button className={'bsStyle="info"'} onClick={this.deleteUser}> Delete User </Button>
          <Button className={'btn bsStyle="info"'} onClick={this.grantProfRole}> Grant Professor Role </Button>
          <Button className={'btn bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <UserList />
        </div>
      )
    }
  }
}

export default AdminPage
