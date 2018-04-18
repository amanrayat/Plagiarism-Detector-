import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AdminPage from './admin/AdminPage.js'
import RegisterPage from './RegisterPage.js'
import axios from 'axios'
import CoursePage from './CoursePage.js'
import TempProfPage from './professor/TempProfPage.js'
import StudentSubmissionPage from './student/StudentSubmissionPage.js'
import ProfessorCoursePage from './professor/ProfessorCoursePage.js'
import ProfessorMainPage from './professor/ProfessorMainPage.js'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HomePage extends React.Component{

  constructor(){
    super();
    this.state = {username:'' ,
                  userID: '',
                  password: '',
                  loggedIn:false,
                  adminlogin:false,
                  role: '',
                  status: '',
                  register: false,
                  loginclick: false,};
    this.handleClick = this.handleClick.bind(this);
    this.register = this.register.bind(this);
    this.loginhandle = this.loginhandle.bind(this);

  }

  update(){
    this.setState({
      userID: this.refs.userID.value,
      password: this.refs.password.value,
      adminlogin: this.state.role === 'admin' ? true : false
    })
  }

  register(){
    this.setState({
      register: true
    })
  }

  loginhandle(){
    this.setState({
      loginclick: true
    })
  }

  handleClick() {

    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: this.state.userID,
          password: this.state.password,
        })
      }).then(function(response) {
	       return response.json();
       }).then(j =>
          this.setState({
            username: Object.values(j)[1].name,
            adminlogin: Object.values(j)[1].userRole === 'admin' ? true : false,
            role: Object.values(j)[1].userRole,
            isLoggedIn: true,
            loginclick: false})
          ).catch(function() {
            alert("Login Error! Please try again.")
          });
        // console.log(this.state.name)
  }

  render(){

    let LoginForm
    let welcomeInfo

    if(this.state.loginclick){
      LoginForm =
      <div className={'container col-md-6 col-md-offset-3'}>
        <h1 className={'text-center'}> User Login </h1>
        <form>
          <div class="form-group">
            <label>User ID: </label>
            <input
                class="form-control"
                type="number"
                ref="userID"
                placeholder="User ID"
                onChange={this.update.bind(this)} />
          </div>
          <div class="form-group">
            <label>Password: </label>
            <input
                class="form-control"
                type="password"
                ref="password"
               placeholder="Password"
               onChange={this.update.bind(this)} />
          </div>
          <div className={'text-center'} >
            <Button className={'btn text-center'} onClick={this.handleClick}> Login </Button>
          </div>
      </form>
      </div>
    }
    else{
      welcomeInfo = <div>
      <br />
      <br />
      <h1 className={'text-center'}> Welcome to Plagiarism Detection System!</h1>
      <h2 className={'text-center'}> Click on Register if using for the first time or Login.</h2>
        </div>
    }





    let NavBar =
    <nav class="navbar navbar-inverse">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" style={{ color: 'white'}} href="/">Plagiarism Detection System</a>
    </div>
    <div>
      <button class="btn btn-default navbar-btn" onClick={this.register}> Register </button>
      <button class="btn btn-danger navbar-btn" onClick={this.loginhandle}> Login </button>
    </div>
  </div>
</nav>

    let isLoggedIn = this.state.isLoggedIn;
    let username = this.state.username;
    let isAdmin = this.state.adminlogin;
    let role = this.state.role;
    let register = this.state.register;

    if(register){
      return (
        <div>
          {NavBar}
          <RegisterPage />
        </div>
      );
    }
    else if (isLoggedIn && !isAdmin && role === 'professor-temp') {
      return <TempProfPage userID={this.state.userID}/>
    }
    else if (isLoggedIn && !isAdmin && role === 'student') {
      return <StudentSubmissionPage userID={this.state.userID}/>
    }
    else if (isLoggedIn && !isAdmin && role === 'professor') {
      return <ProfessorMainPage userID={this.state.userID}/>
    }
    else if (isLoggedIn && isAdmin) {
      return <AdminPage />
    }
    else {
      return (
        <div>
          {NavBar}
          {LoginForm}
          {welcomeInfo}
        </div>
      );
    }
  }
}
