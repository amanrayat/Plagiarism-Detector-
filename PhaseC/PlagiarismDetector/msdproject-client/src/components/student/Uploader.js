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
    }

    this.dropHandler = this.dropHandler.bind(this);
  }

  dropHandler(file) {
    console.log("handle file drop")
    console.log("Course: "+this.state.courseAbbr)
    console.log("Assignment: "+this.state.assignmentName)
    var jsonFile = new FormData();
    jsonFile.append('file', file[0]);
    jsonFile.append('name', file[0].name);

    request.post('http://localhost:8080/upload?course='+this.state.courseAbbr+"&hw="+this.state.assignmentName)
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
      <Dropzone disableClick={false} multiple={false} accept={'application/zip'} onDrop={this.dropHandler}>
        < div > Drop a Zip file, or click to add. < /div >
      </Dropzone>
    );
  }
}
