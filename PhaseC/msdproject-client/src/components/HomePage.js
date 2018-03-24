import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AdminPage from './AdminPage.js'
import RegisterPage from './RegisterPage.js'
import axios from 'axios'
import CoursePage from './CoursePage.js'


export default class HomePage extends React.Component{

  constructor(){
    super();
    this.state = {username:'',userID: '', password: '', loggedIn:false, adminlogin:false};
    this.handleClick = this.handleClick.bind(this)
  }

  update(){
    this.setState({
      userID: this.refs.userID.value,
      password: this.refs.password.value,
      adminlogin: this.state.username ? 'admin' : false
    })
  }

  handleClick() {
    console.log("Success!")
    console.log('http://localhost:8080/team208/login?userId='+this.state.userID+'&password='+this.state.password)
    axios.get('http://localhost:8080/team208/login?userId='+this.state.userID+'&password='+this.state.password)
    .then(response => this.setState({
      username: response.data.name,
      isLoggedIn: true}))
  }

  render(){
    const state = this;
    let isLoggedIn = this.state.isLoggedIn;
    let isAdmin = true;
    if (isLoggedIn && isAdmin) {
      return <CoursePage />
    }
    else if(isLoggedIn && !isAdmin) {
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
          <h3>Login status: {this.state.loggedIn.toString()}</h3>
        </div>
      );
    }
  }
}
