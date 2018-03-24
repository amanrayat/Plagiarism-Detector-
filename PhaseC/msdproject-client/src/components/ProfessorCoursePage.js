import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, Button, Jumbotron, MenuItem, ButtonToolbar, DropdownButton, Pager, Modal, Tooltip, OverlayTrigger,Popover} from 'react-bootstrap';

class ProfessorCoursePage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      term: ['2017','2018','2019'],
      course: ['Algorithm', 'Database', 'msd','PDP','angular'],
      assignments: ['Assignment1', 'Assignment2'],
    };
  }
  courseRow(text,i){
    return (
      <option key={i} value="">{text}</option>
  );
  }
  assignmentRow(text,i) {
    return (
      < option
    key = {i}
    value = "" > {text} < /option>
  )
    ;
  }
    TermRow(text,i){
      return (
        <option key={i} value="">{text}</option>
    );
  }
  render() {
    return (
      <div className={'col-md-6 col-md-offset-3' }>
      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
      <NavItem eventKey="1" href="/home">
        Profile
      </NavItem>
      <NavItem eventKey="3" disabled>
        Logout
      </NavItem>
    </Nav>
      <div className="form-group">
      <select className="form-control" id="exampleFormControlSelect1">
      <option disabled selected={'true'}>Select your Term</option>
    {
      this.state.term.map(this.TermRow.bind(this))
    }
  </select>
      <br/>
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
      <button className={'btn btn-primary float-left'}>Check Plagarism</button>
    <button className = {'btn - btn-primary float-right'}>Set Percentage</button>
      </div>
  );
  }
}

export default ProfessorCoursePage
