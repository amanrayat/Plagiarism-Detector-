import React from 'react';

export default class Submission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: ['Algorithm', 'Database', 'msd','PDP','angular'],
      assignments: ['Assignment1', 'Assignment2'],
    };
  }
  courseRow(text,i){
    return (
      <option key={i} value="">{text}</option>
    );
  }
  assignmentRow(text,i){
    return (
      <option key={i} value="">{text}</option>
    );
  }
  render() {
    return (
      <div className={'container text-center col-4'}>
         <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option disabled selected={'true'}>Select your Course</option>
            {

              this.state.course.map(this.courseRow.bind(this))
            }
          </select>
           <br />
           <select className="form-control" id="exampleFormControlSelect1">
              <option disabled selected={'true'} >Select your Assignment</option>
               {
                 this.state.assignments.map(this.assignmentRow.bind(this))
                }
           </select>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" id="GithubLink" placeholder="Place your GitHub Link Here" />
        </div>
        <button className={'btn btn-primary my-1'}>Submit</button>
      </div>
    );
  }
}
