import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Pager} from 'react-bootstrap';

export default class TempProfPage extends React.Component{

  render(){
    var userID = this.props.userID;
    return(
    <div>
      <Button className={'btn'} href="/"> Logout </Button>
      <h1> Waiting for Admin Confirmation for User ID {userID}</h1>
    </div>);
  }
}
