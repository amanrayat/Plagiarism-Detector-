import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class NewUser extends React.Component{

  constructor(){
    super();

    this.state = {userID:'', univID:'', name:'', userRole:'', password:'', email:'', successMessage: false};

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Success from RegisterPage!")

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
	        // console.log(Object.values(j)[1].name);
          this.setState({
            userID:'',
            univID:'',
            name:'',
            userRole:'',
            password:'',
            email:'',
            successMessage: "New User Created!"
          })
        );
  }

  update(){
    this.setState({
      userID: 10,
      univID: this.refs.id.value,
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
        <h1> User Registration </h1>
        <input type="text" ref="id" placeholder="University ID"
                onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="text" name="name" ref="name" placeholder="Name"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="email" name="email" ref="email" placeholder="Email"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="password" name="password" ref="password" placeholder="Password"
              onChange={this.update.bind(this)}/>
        <br />
        <br />
        <input type="radio" name="role" ref="studentRole" value="student"
                checked={this.state.userRole === 'student'}
                onChange={this.handleUserRole.bind(this)} /> <label>Student</label>
        <br />
        <input type="radio" name="role" ref="profRole" value="professor-temp"
              checked={this.state.userRole === 'professor-temp'}
              onChange={this.handleUserRole.bind(this)} /> <label>Professor</label>
        <br />
        <br />

        <h2> {this.state.successMessage} </h2>
        <button onClick={this.handleClick}> Submit </button>

      </div>
    );
  }
}

export default NewUser
