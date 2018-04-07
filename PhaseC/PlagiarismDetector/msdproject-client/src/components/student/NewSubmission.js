import React from 'react';

export default class NewSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: '',
      assignmentID: '',
      gitLink: '',
      studentId: this.props.userID,
    };
    // this.handleClick = this.handleClick.bind(this)
  }

//   http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission
//  REQUEST:
//
// {
// 	"assignmentId" : 5,
// 	"studentId": 201,
// 	"gitLink": "https://github.com/enrolled02/python-crawler1"
//
// }

update(){
  this.setState({
    assignmentID: this.refs.assignmentID.value,
    gitLink: this.refs.gitLink.value,
  })
}

handleClick(){
  console.log(this.state.assignmentID)
  console.log(this.state.studentId)
  console.log(this.state.gitLink)
  fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assignmentId: this.state.assignmentID,
        studentId: this.state.studentId,
        gitLink: this.state.gitLink,
      })
    }).then(function(response) {
       return response.json();
     }).then(j =>
        // console.log(Object.values(j)[1].name);
        this.setState({
          assignmentID: '',
          studentId: '',
          gitLink: '',
        })
      ).catch(function() {
        alert("Error adding a new course. Please try again.")
      });
}

render() {
  return (
    <div>
    <input type="text"
          ref="assignmentID"
          placeholder="Assignment ID"
          onChange={this.update.bind(this)} />
    <input type="text" ref="gitLink" placeholder="GitLink"
          onChange={this.update.bind(this)}/>
    <button onClick={this.handleClick.bind(this)}> Submit </button>
    </div>
  );
}
}
