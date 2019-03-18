import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      error : null,
      res: null,
      token: null
    }
  }
  
componentDidMount(){
  this.setState({token: this.props.match.params.token }); 
  fetch(`/api/reset/${this.state.token}`, {
    method: "GET",
    body: JSON.stringify(this.res),
			headers: {
				'Content-Type': 'application/json'
			}
  })
  .then(res => res.json())
  .then(res => this.setState({ message: res.message, 
    error: res.error, errorMessage: res.errorMessage}));
  
}

	render() {
    return (
      <div className="container">
      { this.state.errorMessage ? 
      <div>
        <h2>{this.state.errorMessage}</h2>
        <br />
        <Link className="btn btn-primary" to="/login"> На головну </Link>
      </div>
      : 
      <form method="POST" action={`/api/reset/${this.state.token}?_method=PATCH`} className="container">
        <h2>Відновлення паролю</h2>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input name="password" type="password" className="form-control" id="password"  placeholder="Введіть новий пароль"/>
          <label htmlFor="confirmPassword">Підтвердіть пароль</label>
          <input name="confirmPassword" type="password" className="form-control" id="confirmPassword"  placeholder="Підтвердіть пароль"/>
        </div>
        <button type="submit" className="btn btn-block btn-primary">Надіслати</button>
        <span className="text-danger">{this.state.error ? this.state.error: " "}</span>
      </form>
      }
      </div> 
		);
	}
}

export default ResetPassword;