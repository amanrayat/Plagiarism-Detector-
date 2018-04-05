import React from 'react';

export default class AdminNavBar extends React.Component{
  render() {
    return (
      <div >
      <button className={'btn btn-primary'} onClick={this.handleClick}> Users List </button>
      <button className={'btn btn-primary'} onClick={this.registerUser}> New User </button>
      <button className={'btn btn-primary'} onClick={this.updateUser}> Update User </button>
      <button className={'btn btn-primary'} onClick={this.deleteUser}> Delete User </button>
      <button className={'btn btn-primary'} onClick={this.grantProfRole}> Grant Professor Role </button>
      <button className={'btn'}> <a href="/"> Logout </a> </button>
      <br />
      <br />
      </div>
    );
  }
}
