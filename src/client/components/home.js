import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Login from './login';

export default class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
      role: null,
      id: null,
      name: null
		};
	}

  componentDidMount() {
    fetch('/api/')
		.then(res => res.json())
    .then(res => this.setState({ role: res.role, id: res.id, name: res.name }))    
    .catch(err => err);    
  }

  render() {
    const { role } = this.state;
      return (
        <div className='container'>
        {role ?
        <div>
          <h1 className='homeHeader'>Оберіть напрямок щоб побачити які працівники підпадають під даний вибір:</h1>        
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Back-End'>Back-End</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Front-End'>Front-End</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Sails Manager'>Sails Manager</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Верстальщик'>Верстальщик</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Dev Ops'>Dev Ops</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Full Stack'>Full Stack</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Tester'>Tester</Link>
            <Link to='/nonFunctional' className='btn btn-lg btn-primary devType' name='devType' value='Project Manager'>Project Manager</Link>
        </div>
        : <Login />}
        </div>
      );
  }
}