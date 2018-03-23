import React from 'react';
import ReactDOM from 'react-dom';

class AdminPage extends React.Component{

  constructor(props: any){
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/team208/all')
      .then(response => response.json())
      .then(data => this.setState({users: data}));
  }

  render(){

    const users = this.state.users;
    return (
      <div>
        <h1> List of Users </h1>
        {users.map((user: any) =>
          <div key={user.id}>
            {user.name} {user.email} {user.userRole}
          </div>
      )}
      </div>
    );
  }
}

export default AdminPage
