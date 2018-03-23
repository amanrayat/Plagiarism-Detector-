import React from 'react';
import Navbar from 'components/Navbar';
import ChooseCourse from 'components/ChooseCourse';
import Header from 'components/Header';

export default class ChooseCoursePage extends React.Component{
  render(){
    return(
      <div>
        <Navbar head={'Courses'}/>
        <Header header={'Select your Courses'}/>
        <ChooseCourse button={'Submit'}/>
      </div>
    )
  }
}
