import React, { Component } from 'react';

import EditUser from './editUser';
import Login from '../login';
import AddInvitationTable from './addInvitationTable';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [ ] ,
      role: null,
      message: null
    };

  }
  componentWillMount() {
    const lists = this.getLists();
    this.setState({ lists });
  }

  getLists() {
    return this.state.lists;
  }
  onAdd(email, role) {
    const lists = this.getLists();
    lists.push({
      email,
      role
    });
    this.setState({ lists });

  }

  componentDidMount() {
    fetch('/api/admin')
      .then(res => res.json())
      .then(res => this.setState({ role: res.role }));
    return fetch('/api/admin/admin_list')
      .then(res => res.json())
      .then(res => this.setState({ lists: res, message: res.message }))
  }
  render() {
    console.log("this role",this.state.role);
    return (
      <div className='container'>
        {this.state.role === 'admin' || this.state.role === 'superAdmin' ?
          <div className='container'>
            <AddInvitationTable />    
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.lists.map(list => {
                    return (
                      <EditUser
                        key={list.email}
                        {...list}
                        onDelete={this.onDelete}
                        onEditSubmit={this.onEditSubmit}
                      />
                    );
                  })
                }
              </tbody>
            </table>
          </div>
          : this.state.role === null ? <Login />
            : <div className="error404">
              <h1>Error 404</h1>
              <h2>Page not found!</h2>
            </div>
        }
      </div>
    );
  }

}
export default Admin;