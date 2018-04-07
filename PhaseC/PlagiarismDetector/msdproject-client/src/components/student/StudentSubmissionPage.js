import React from 'react';
import NewSubmission from './NewSubmission.js';
import {BootstrapTable, TableHeaderColumn, Button} from 'react-bootstrap';
import ViewAllSubmissions from './ViewAllSubmissions'
import ViewCourses from './ViewCourses'
import RegisterForCourse from './RegisterForCourse'
import DeleteSubmission from './DeleteSubmission'
import UpdateSubmission from './UpdateSubmission'

export default class StudentSubmissionPage extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      registerCourse: false,
      viewCourses: false,
      newSubmission: false,
      viewSubmission: false,
      updateSubmission: false,
      deleteSubmission: false,
      courses: [],
      courseNames: [],
    };

    this.registerCourse = this.registerCourse.bind(this);
    this.viewCourses = this.viewCourses.bind(this);
    this.newSubmission = this.newSubmission.bind(this);
    this.viewAllSubmissions = this.viewAllSubmissions.bind(this);
    this.updateSubmission = this.updateSubmission.bind(this);
    this.deleteSubmission = this.deleteSubmission.bind(this);
  }

  componentDidMount(){
    console.log("User ID from fetch users",this.props.userID)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/getStudentCourses?userId='+this.props.userID)
      .then(response => response.json())
      .then(data => this.setState({courses: data}));
    console.log("Student Courses",this.state.courses)
  }

  updateSubmission(){
    this.setState({
      registerCourse: false,
      viewCourses: false,
      newSubmission: false,
      viewSubmission: false,
      updateSubmission: true,
      deleteSubmission: false,
    })
  }

  deleteSubmission(){
    this.setState({
      registerCourse: false,
      viewCourses: false,
      newSubmission: false,
      viewSubmission: false,
      updateSubmission: false,
      deleteSubmission: true,
    })
  }

  viewAllSubmissions(){
    this.setState({
      registerCourse: false,
      viewCourses: false,
      newSubmission: false,
      viewAllSubmissions: true,
      updateSubmission: false,
      deleteSubmission: false,
    })
  }

  registerCourse(){
    this.setState({
      registerCourse: true,
      viewCourses: false,
      newSubmission: false,
      viewAllSubmissions: false,
      updateSubmission: false,
      deleteSubmission: false,
    })
  }

  viewCourses(){
    this.setState({
      registerCourse: false,
      viewCourses: true,
      newSubmission: false,
      viewAllSubmissions: false,
      updateSubmission: false,
      deleteSubmission: false,
    })
  }

  newSubmission(){
    this.setState({
      registerCourse: false,
      viewCourses: false,
      newSubmission: true,
      viewAllSubmissions: false,
      updateSubmission: false,
      deleteSubmission: false,
    })
  }

  render(){
    if(this.state.registerCourse){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <RegisterForCourse userID={this.props.userID}/>
        </div>
      )
    }
    else if(this.state.newSubmission){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <NewSubmission userID={this.props.userID} courses={this.state.courses}/>
        </div>
      )
    }
    else if(this.state.viewCourses){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <ViewCourses userID={this.props.userID}/>
        </div>
      )
    }
    else if(this.state.viewAllSubmissions){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <ViewAllSubmissions userID={this.props.userID}/>
        </div>
      )
    }
    else if(this.state.updateSubmission){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <UpdateSubmission userID={this.props.userID}/>
        </div>
      )
    }
    else if(this.state.deleteSubmission){
      return(
        <div>
          <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
          <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
          <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
          <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
          <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
          <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
          <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
          <br />
          <br />
          <DeleteSubmission userID={this.props.userID}/>
        </div>
      )
    }
    else
    return(
      <div>
        <Button className={'btn-primary'} onClick={this.newSubmission}> Submit Assignment </Button>
        <Button className={'bsStyle="info"'} onClick={this.viewAllSubmissions}> View Submission </Button>
        <Button className={'bsStyle="info"'} onClick={this.registerCourse}> Register Course </Button>
        <Button className={'bsStyle="success"'} onClick={this.viewCourses}> View Courses </Button>
        <Button className={'bsStyle="success"'} onClick={this.updateSubmission}> Update Submission </Button>
        <Button className={'bsStyle="success"'} onClick={this.deleteSubmission}> Delete Submission </Button>
        <Button className={'bsStyle="danger"'} href="/"> Logout </Button>
        <br />
        <br />
        <NewSubmission userID={this.props.userID} />
      </div>
    )
  }
}
