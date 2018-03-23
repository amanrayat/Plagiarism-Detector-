import React from 'react';
import CheckPlagarism from 'components/CheckPlagarism';
import Navbar from 'components/Navbar';
import  Header from 'components/Header';

export default class CheckPlagarismPage extends React.Component{
  render(){
    return(
      <div>
        <Navbar head={'Welcome Professor'}/>
        <Header header={'Check Plagarism'}/>
        <CheckPlagarism />

      </div>
    )
  }
}
