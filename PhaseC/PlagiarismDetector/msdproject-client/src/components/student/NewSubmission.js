import React from 'react';

export default class NewSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: this.props.courses,
      assignments: ['homework1', 'homework2'],
      status: '',
      disableSubmit: false,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  courseRow(text,i){
    let optionItems = this.state.courses.map((course) =>
                <option key={course.courseId}>{course.courseAbbr}</option>
            );
    console.log("Option Items: ",optionItems)
        return (
         <div>
             <select>
                {optionItems}
             </select>
         </div>
        )

  }
  assignmentRow(text,i){
    return (
      <option key={i} value="">{text}</option>
    );
  }

  handleClick() {
    this.setState({
      disableSubmit: true
    })
  }

  // Submission API
  // http://ec2-18-191-0-180.us-east-2.compute.amazonaws.com:8080/team208/submitSubmission
//  REQUEST:
//
// {
// 	"assignmentId" : 5,
// 	"studentId": 201,
// 	"gitLink": "https://github.com/enrolled02/python-crawler1"
//
// }


  render() {
    let disableSubmit = this.state.disableSubmit;
    if(!disableSubmit){
    return (
      <div className={'container text-center'}>
         <div className="form-group">
          <select className="form-control" id="exampleFormControlSelect1">
            <option disabled selected={'true'}>Select your Course</option>
            {
              this.state.courses.map(this.courseRow.bind(this))
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
        <button className={'btn btn-primary my-1'} onClick={this.handleClick}>Submit</button>
      </div>
    );
  } else
  {
    return( <h2> Assignment Submission successful </h2>)
  }
}
}
