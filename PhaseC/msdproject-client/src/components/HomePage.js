import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component{
  render(){
    return (
      <div class="col-md-6 col-md-offset-3">
        <h1> Plagiarism Detection System </h1>
        <input type="text" name="email" placeholder="Email Address" />
        <br />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <br />
        <button> Login </button>
        <button> Register </button>
      </div>
    );
  }
}

export default HomePage
