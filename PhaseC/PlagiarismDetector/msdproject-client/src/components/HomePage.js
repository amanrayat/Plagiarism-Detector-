import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AdminPage from './AdminPage.js'
import RegisterPage from './RegisterPage.js'
import axios from 'axios'
import CoursePage from './CoursePage.js'

import StudentSubmissionPage from './StudentSubmissionPage.js'
import ProfessorCoursePage from './ProfessorCoursePage.js'



export default class HomePage extends React.Component{

  constructor(){
    super();
    this.state = {username:'' ,userID: '', password: '', loggedIn:false, adminlogin:false, role: '', status: ''};
    this.handleClick = this.handleClick.bind(this)
  }

  update(){
    this.setState({
      userID: this.refs.userID.value,
      password: this.refs.password.value,
      adminlogin: this.state.username === 'admin' ? true : false
    })
  }

  handleClick() {
    console.log("Success!")

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
	        // console.log(Object.values(j)[1].name);
          this.setState({
            username: Object.values(j)[1].name,
            adminlogin: Object.values(j)[1].name === 'admin' ? true : false,
            role: Object.values(j)[1].userRole,
            isLoggedIn: true})
          );
  }

  render(){
    let isLoggedIn = this.state.isLoggedIn;
    let username = this.state.username;
    let isAdmin = this.state.adminlogin;
    let role = this.state.role;
    if (isLoggedIn && !isAdmin && role === 'student') {
      return <StudentSubmissionPage />
    }
    else if (isLoggedIn && !isAdmin && role === 'professor') {
      return <ProfessorCoursePage />
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
          <button className={'btn'}>
            <Link to="register"> Register </Link>
          </button>
        </div>
      );
    }
  }
}
