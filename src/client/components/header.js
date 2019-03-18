import React, { Component } from 'react';
import logo from './logo.png';
import { Link, Redirect } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			role: '',
			name: ''
		};
		this.logout = this.logout.bind(this);
	}
	componentDidMount() {
		fetch('/api/')
			.then(res => res.json())
			.then(res => this.setState({ role: res.role, id: res.id, name: res.name }))
			.catch(err => err);
	}

	logout() {
		fetch('/api/logout', { method: 'GET' });
		this.setState({ role: '' });
	}
	
	showUser() {
		let userRole = '';

		switch(this.state.role) {
			case 'admin':
				userRole = 'Адміністратор';
				break;
			case 'superAdmin':
				userRole = 'Директор';
				break;
			case 'recruiter':
				userRole = 'Рекрутер';
				break;
		}

		return userRole;
	}

	render() {
		if (this.state.role === 'admin' || this.state.role === 'superAdmin' || this.state.role === 'recruiter' ) {
			return (	
				<header>
					<nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex flex-row">													
						<div className='collapse navbar-collapse d-flex flex-row justify-content-between'>
							<ul className="navbar-nav align-items-center">	
								<li className="nav-item">
									<a className="navbar-brand" href="/">
										<img id="logo" src={logo} className="App-logo" alt="logo" />
									</a>
								</li>
								<span className="navbar-brand mb-0 h1">NetLS</span>												
								<li className="nav-item">
									<a className="nav-link" href="/">Головна</a>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Меню</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown">
										<Link className="dropdown-item" to="/nonFunctional">Додати кандидата</Link>
										<Link className="dropdown-item" to="/setting">Налаштування</Link>
										{this.state.role === 'admin' || this.state.role === 'superAdmin' ? (
										<Link className="dropdown-item" to="/admin">Адмін</Link>
										):(
											<div></div>
										)
										}
									</div>
								</li>
							</ul>
							<ul className='navbar-nav'>
								<form className="form-inline">
									<input className="form-control mr-2" type="search" placeholder="Пошук" aria-label="Search"/>
									<button className="btn btn-light my-sm-0" type="submit">Шукати</button>
								</form>
							</ul>							
							<ul className='navbar-nav'>
								<li className='nav-item userHeader'>
									<Link to='/setting' className='nav-link'>{this.showUser() + ' ' + this.state.name}</Link>
								</li>
							</ul>
							<ul className='navbar-nav'>
								<li className='nav-item'>
									<Link className="nav-link" to="/login" onClick={this.logout}>Вийти</Link>	
								</li>
							</ul>
						</div>						
					</nav>
				</header>
			);
		} else {
			return (
				<div></div>
			);
		}

	}
}

export default Header;