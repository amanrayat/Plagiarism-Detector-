import React from 'react';

export default class ChooseCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [{ course: 'Algorithm', term: 2018 }, { course: 'MSD', term: 2017 },
        { course: 'Database', term: 2016 }, { course: 'PDP', term: 2017 }],
    };
  }

  addCourse(text, i) {
    return (
      <tr key={i}>
        <th scope="row">
          <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        </th>
        <td>
          {text.course}
        </td>
        <td>
          {text.term}
        </td>
      </tr>
    );
  }
  render() {
    return (
      <div>
        <h1 className={'text-center p-5'}>{this.props.head}</h1>
        <div className={'container text-center col-6'}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Select</th>
                <th scope="col">Term</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>{
              this.state.courses.map(this.addCourse.bind(this))
            }
            </tbody>
          </table>
          <button className={'btn btn-primary'}>{this.props.button}</button>
        </div>
      </div>
    );
  }
}
