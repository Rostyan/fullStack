import React, { Component } from 'react';

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: ''
    };		
  }

  componentDidMount() {
    fetch('/api/employees')
    .then(res => res.json())    
    .then(res => this.setState({ message: res.message, user: res.user }));    
  }

  render() {    
    return(
      <div className='container'>
        {this.state.message ?
          <h1 className='employeeMsg'>{this.state.message}</h1>
          :
          <p>{JSON.stringify(this.state.user)}</p>
        }
      </div>
    )
  }


}