import React, { Component } from 'react';

class Login extends Component {

  componentDidMount() {
    fetch('/api/login')
      .then(res => res.json());
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Сторінка Авторизації</h1>
        <div className="row d-flex align-items-center">
          <div className="col">
            <form method="POST" action="/api/login" className=" form-horizontal">
              <input type="text" className="form-control"
                id="email" name="email" placeholder="Введіть email" ref={emailInput => this.emailInput = emailInput} required />
              <br></br>
              <input type="password"
                className="form-control" id="password" name="password"
                placeholder="Введіть пароль" ref={passwordInput => this.passwordInput = passwordInput} required />
              <div className="input-group input-sm">
                <a href="/password_reset" id="forgotpass">Забули пароль?</a>
              </div>
              <div className="form-actions">
                <input type="submit"
                  className="btn btn-block btn-primary btn-default" value="Ввійти" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
