import React from 'react';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';
import ProfessorCoursePage from './ProfessorCoursePage'
import AddNewCoursePage from './AddNewCoursePage'
import AddNewAssignmentPage from './AddNewAssignmentPage'
import CoursePage from './CoursePage'
import AssignmentsPage from './AssignmentsPage'

export default class ProfessorMainPage extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      generateReports: false,
      assignmentsPage: false,
      addNewAssignment: false,
      coursePage: false,
      addNewCourse: false,
      userID: this.props.userID,
    };

    this.generateReports = this.generateReports.bind(this);
    this.assignmentsPage = this.assignmentsPage.bind(this);
    this.addNewAssignment = this.addNewAssignment.bind(this);
    this.coursePage = this.coursePage.bind(this);
    this.addNewCourse = this.addNewCourse.bind(this);
  }

  generateReports(){
    this.setState({
      generateReports: true,
      assignmentsPage: false,
      addNewAssignment: false,
      coursePage: false,
      addNewCourse: false,
    })
  }

  assignmentsPage(){
    this.setState({
      generateReports: false,
      assignmentsPage: true,
      addNewAssignment: false,
      coursePage: false,
      addNewCourse: false,
    })
  }

  addNewAssignment(){
    this.setState({
      generateReports: false,
      assignmentsPage: false,
      addNewAssignment: true,
      coursePage: false,
      addNewCourse: false,
    })
  }

  coursePage(){
    this.setState({
      generateReports: false,
      assignmentsPage: false,
      addNewAssignment: false,
      coursePage: true,
      addNewCourse: false,
    })
  }

  addNewCourse(){
    this.setState({
      generateReports: false,
      assignmentsPage: false,
      addNewAssignment: false,
      coursePage: false,
      addNewCourse: true,
    })
  }

  render(){
    if(this.state.generateReports){
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <ProfessorCoursePage userID={this.state.userID}/>
        </div>
      )
    }
    else if(this.state.assignmentsPage){
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <AssignmentsPage />
        </div>
      )
    }
    else if(this.state.addNewAssignment){
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <AddNewAssignmentPage />
        </div>
      )
    } else if(this.state.addNewCourse){
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <AddNewCoursePage userID={this.state.userID}/>
        </div>
      )
    }
    else if(this.state.coursePage){
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <CoursePage />
        </div>
      )
    }
    else {
      return(
        <div style={{ padding: '25px'}}>
          <Button className={'btn-primary'} onClick={this.generateReports}>  Generate Reports </Button>
          <Button className={'bsStyle="info"'} onClick={this.assignmentsPage}> Assignments Page </Button>
          <Button className={'bsStyle="info"'} onClick={this.addNewAssignment}> Add New Assignment </Button>
          <Button className={'bsStyle="success"'} onClick={this.coursePage}> Courses Page </Button>
          <Button className={'bsStyle="success"'} onClick={this.addNewCourse}> Add new Course </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <ProfessorCoursePage userID={this.state.userID}/>
        </div>
      )
    }
  }
}
