import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, Button, Jumbotron, MenuItem, ButtonToolbar, DropdownButton, Pager, Modal, Tooltip, OverlayTrigger,Popover} from 'react-bootstrap';

class ProfessorCoursePage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;



    return (
      <div class="col-md-6 col-md-offset-3">
        <h1> Welcome Professor </h1>
        <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="1" href="/home">
          Profile
        </NavItem>
        <NavItem eventKey="3" disabled>
          Logout
        </NavItem>
      </Nav>
      <br />
      <br />

      <ButtonToolbar>
        <DropdownButton title="Select Term" id="dropdown-size-medium">
          <MenuItem eventKey="1">Spring 2018</MenuItem>
          <MenuItem eventKey="2">Fall 2017</MenuItem>
          <MenuItem eventKey="3">Summer 2017</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <DropdownButton title="Select Course" id="dropdown-size-medium">
          <MenuItem eventKey="1">CS5500</MenuItem>
          <MenuItem eventKey="2">CS5800</MenuItem>
          <MenuItem eventKey="3">CS5101</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      <br />
      <ButtonToolbar>
        <DropdownButton title="Select Assignment" id="dropdown-size-medium">
          <MenuItem eventKey="1">Assigment 1</MenuItem>
          <MenuItem eventKey="2">Assigment 2</MenuItem>
          <MenuItem eventKey="3">Assigment 3</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      <br />
      <br />
      <Button bsStyle="primary" bsSize="large">Check Plagiarism</Button>
      <br />
      <br />
      <Button bsStyle="primary" onClick={this.handleShow}>
          Change Percentage
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Select Percentage</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ButtonToolbar>
            <DropdownButton title="Select Percentage" id="dropdown-size-medium">
              <MenuItem eventKey="1">80%</MenuItem>
              <MenuItem eventKey="2">75%</MenuItem>
              <MenuItem eventKey="3">65%</MenuItem>
              <MenuItem eventKey="3">55%</MenuItem>
              <MenuItem eventKey="3">45%</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Save & Close</Button>
          </Modal.Footer>
        </Modal>


      <Pager>
        <Pager.Item href="#">Back</Pager.Item>
      </Pager>
      </div>
    );
  }
}

export default ProfessorCoursePage
