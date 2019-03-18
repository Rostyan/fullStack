import React, { Component } from 'react';

class SendResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      error : null,
      res: null
    }
  }
  
componentDidMount(){
  fetch("/api/password_reset")
  .then(res => res.json())
  .then(res => this.setState({ message: res.message ,
     error: res.error ? res.error : " "}));
}

	render() {
		return (
      <form method="POST" action="/api/password_reset" className="container">
        <h2>Відновлення паролю</h2>
        <div className="form-group">
          <label htmlFor="email">Емейл</label>
          <input name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Введіть емейл"/>
        </div>
        <button type="submit" className="btn btn-block btn-primary">Надіслати</button>
        <a type="submit" className="btn btn-block btn-primary" href='/'>На головну</a>
        <span className="text-danger">{this.state.error ? this.state.error: " "}</span>
        <span className="text-success">{this.state.message ? this.state.message: " "}</span>
      </form>
		);
	}
}

export default SendResetPassword;