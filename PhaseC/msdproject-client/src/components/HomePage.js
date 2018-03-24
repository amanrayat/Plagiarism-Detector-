import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import AdminPage from './AdminPage.js'
import RegisterPage from './RegisterPage.js'

class HomePage extends React.Component{

  constructor(){
    super();
    this.state = {users: [], userId: '', password: ''};
  }

  render(){
    const users = this.state.users;
    console.log(users)
    return (
      <div className={'container col-md-6 col-md-offset-3'}>
        <h1> Plagiarism Detection System </h1>
        <input className={'col-4'} type="number" onChange = {(event,newValue) => this.setState({userId: newValue})} name="userId" placeholder="User ID" />
        <br />
        <br />
        <input type="password" onChange = {(event,newValue) => this.setState({password: newValue})} name="password" placeholder="Password" />
        <br />
        <br />
        <button className={'btn btn-primary'}> Login </button>
        <button className={'btn btn-primary'}> Register </button>
      </div>
    );
  }
}

export default HomePage
