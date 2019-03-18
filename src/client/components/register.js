import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class Register extends Component {
	constructor() {
    super();
    this.state = {
      errorOnSubmit: null,
      messageOnSubmit: null,
      email: "",
      message: null,
      error : null,
      res: null,
      token: null
    }
  }
  
componentDidMount(){
  
	this.setState({token: this.props.match.params.token }); 
  fetch(`/api/signup/${this.state.token}`)
  .then(res => res.json())
  .then(res => this.setState({ message: res.message ,
     email: res.email, 
     error: res.error,
     messageOnSubmit: res.messageOnSubmit,
    errorOnSubmit: res.errorOnSubmit}));
}

	render() {
		return (
      this.state.messageOnSubmit ? 
      <div>
      <span>{this.state.messageOnSubmit}</span>
      <br></br>
      <Link className="btn btn-primary" to="/">На Головну</Link>
      </div>
      : this.state.error ? 
      <div>
      <span>Вийшов строк придатності токена або він некоректний</span> 
      <br></br>
      <Link className="btn btn-primary" to="/">На Головну</Link>
      </div>
      :
      <form method="POST" action={`/api/signup/${this.state.token}`} className="container">
        <div className="form-group">
        <label htmlFor="email">Емейл</label>
        <input required name="email" value={this.state.email} type="hidden" className="form-control"/>
          <input name="email"  value={this.state.email} disabled type="email" className="form-control"/>
          <label htmlFor="email">Емейл для сповіщень</label>
          <input required autoComplete="email" name="secondEmail" type="email" className="form-control" placeholder="Введіть емейл для сповіщень"/>
					<label htmlFor="name">Ім'я</label>
				 <input required name="name" id="name" type="text" className="form-control" placeholder="Введіть ім'я"/>
				 <label htmlFor="email">Пароль</label>
				  <input required autoComplete="password" name="password" type="password" className="form-control"  placeholder="Пароль"/>
					<label htmlFor="email">Підтвердження паролю</label>
					<input required autoComplete="password" name="confirmPassword" type="password" className="form-control" placeholder="Підтвердження паролю"/>
        </div>
        <button type="submit" className="btn btn-block btn-primary">Надіслати</button>
        <span className="text-danger">{this.state.errorOnSubmit ? this.state.errorOnSubmit: " "}</span>
        <span className="text-success">{this.state.messageOnSubmit ? this.state.messageOnSubmit: " "}</span>
      </form>
		);
	}
}

export default Register;
