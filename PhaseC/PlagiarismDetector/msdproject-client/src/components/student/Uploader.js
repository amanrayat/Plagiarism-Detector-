import React from 'react';
import ReactDOM from 'react-dom';

// import the components
import Dropzone from 'react-dropzone';
import request from 'superagent';

//'application/java-archive'
export default class Uploader extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      courseAbbr: this.props.courseAbbr,
      assignmentName: this.props.assignmentName,
      fileName: '',
      studentId: this.props.studentId,
      submitAssignmentId: this.props.submitAssignmentId,
    }

    this.dropHandler = this.dropHandler.bind(this);
  }

  handleClick(){
    console.log("Assignment ID: ",this.state.submitAssignmentId)
    console.log("Student ID: ",this.state.studentId)
    console.log("FileName: ",this.state.fileName)
    console.log("gitlink: "+"DownloadReports2/"+this.state.courseAbbr+"/"+this.state.assignmentName+"/"+this.state.fileName)
    fetch('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignmentId: this.state.submitAssignmentId,
          studentId: this.state.studentId,
          gitLink: "DownloadedReports2/"+this.state.courseAbbr+"/"+this.state.assignmentName+"/"+this.state.fileName,
        })
      }).then(function(response) {
         return response.json();
       }).then(j =>
          // console.log(Object.values(j)[1].name);
          this.setState({
            submitAssignmentId: '',
            studentId: '',
            gitLink: '',
            isForm: false
          })
        ).catch(function() {
          alert("Error adding a new course. Please try again.")
        });
  }

  dropHandler(file) {
    console.log("handle file drop")
    console.log("Course: "+this.state.courseAbbr)
    console.log("Assignment: "+this.state.assignmentName)
    var jsonFile = new FormData();
    jsonFile.append('file', file[0]);
    jsonFile.append('name', file[0].name);
    this.setState({
      fileName: file[0].name
    })
    request.post('http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/upload?course='+this.state.courseAbbr+"&hw="+this.state.assignmentName)
    .send(jsonFile)
    .end(function(err, resp) {
      if (err) {
        console.error(err);
      }
      return resp;
    });
  }


  render() {
    return (
      <div>
        <Dropzone disableClick={false} multiple={false} accept={'application/zip'} onDrop={this.dropHandler}>
          <div> Drop a Zip file, or click to add. < /div >
        </Dropzone>
        <button onClick={this.handleClick.bind(this)}> Submit </button>
      </div>
    );
  }
}
