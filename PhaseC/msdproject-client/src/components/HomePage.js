import React from 'react';
import ReactDOM from 'react-dom';

class HomePage extends React.Component{

  constructor(){
    super();
    this.state = {userId: '', password: ''};
  }


  render(){
    return (
      <div class="col-md-6 col-md-offset-3">
        <h1> Plagiarism Detection System </h1>
        <input type="number" onChange = {(event,newValue) => this.setState({userId: newValue})} name="userId" placeholder="User ID" />
        <br />
        <br />
        <input type="password" onChange = {(event,newValue) => this.setState({password: newValue})} name="password" placeholder="Password" />
        <br />
        <br />

        <button onClick={(event) => this.handleClick(event)}> Login </button>
        <button> Register </button>
      </div>
    );
  }
}

export default HomePage
