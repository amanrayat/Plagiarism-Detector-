import React from 'react';
import ReactDOM from 'react-dom';

class RegisterPage extends React.Component{
  render(){
    return (
      <div>
        <h1> Plagiarism Detection System </h1>
        <input type="text" name="id" placeholder="University ID" />
        <br />
        <br />
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <input type="radio" name="role" value="student" /> <label>Student</label>
        <input type="radio" name="role" value="professor" /> <label>Professor</label>
        <br />
        <br />
        <button> Submit </button>
      </div>
    );
  }
}

export default RegisterPage