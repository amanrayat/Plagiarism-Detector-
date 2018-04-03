import React from 'react';
import ProfessorCoursePage from 'components/ProfessorCoursePage';
import  Header from 'components/Header';

export default class CheckPlagarismPage extends React.Component{
  render(){
    return(
      <div>
        <Header header={'Check Plagarism'}/>
        <ProfessorCoursePage />
      </div>
    )
  }
}
