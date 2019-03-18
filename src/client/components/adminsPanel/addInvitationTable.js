import React, { Component } from 'react'

import AddUser from './addUser';
import AddUserTable from './addUserTable';

export default class AddInvitationTable extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      role: '',
      isVisible: false,
      items: []
    }
    this.onDelete = this.onDelete.bind(this);
  };

  onDelete(index){


    const lists = this.state.items;

    if(lists.length===1){
      this.setState({items: []});
    } else {
       lists.splice(index, 1);
      this.setState({items: lists});
    }
    
  }
 

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.state.isVisible = true;
    let items = [...this.state.items];

    items.push({email: this.state.email, role: this.state.role});

    this.setState({
      items,
      email: '',
      role: ''
    });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div>
        <AddUser handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newEmail={ this.state.email } 
        newRole={ this.state.role }/>
              { this.state.isVisible ? (
                <form method="POST" action="api/invite_many">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Емейл</th>
                        <th scope="col">Роль</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        
                      </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.items.map((item,index) => {
                            return (
                              <AddUserTable
                                key={index}
                                {...item}
                                onDelete={this.onDelete.bind(this, index)} 
                                isVisible={this.state.isVisible} 
                              />
                            );
                          })
                        }
                    </tbody>
                  </table>
                  <button className="btn-primary btn">Надіслати запрошення</button>
                </form>
              ) : (
                <div></div>
              )}
      </div>
    );
  }
}
