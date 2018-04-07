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
                  register: false};
    this.handleClick = this.handleClick.bind(this);
    this.register = this.register.bind(this);
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
      register:true
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
            isLoggedIn: true})
          ).catch(function() {
            alert("Login Error! Please try again.")
          });
        // console.log(this.state.name)
  }

  render(){
    let isLoggedIn = this.state.isLoggedIn;
    let username = this.state.username;
    let isAdmin = this.state.adminlogin;
    let role = this.state.role;
    let register = this.state.register;

    if(register){
      return <RegisterPage />
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
        <div className={'container col-md-6 col-md-offset-3'}>
          <h1> User Log In </h1>
          <input className={'col-4'}
                type="number"
                ref="userID"
                placeholder="User ID"
                onChange={this.update.bind(this)} />
          <br />
          <br />
          <input className={'col-4'}
                type="password"
                ref="password"
                placeholder="Password"
                onChange={this.update.bind(this)} />
          <br />
          <br />
          <button className={'btn btn-primary'} onClick={this.handleClick}> Login </button>
          <button className={'btn'} onClick={this.register}> Register </button>
        </div>
      );
    }
  }
}
