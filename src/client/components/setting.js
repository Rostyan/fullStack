import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Setting extends Component {
  
  constructor(props) {
		super(props);
      this.state = {
        lists: [],
        isEdit: true,
        isSave: false
      };

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit() {
		if(this.state.isEdit){
      this.setState({ isEdit: false, isSave: true });
		} else {
      this.setState({ isEdit: true, isSave: true });
		}
	}

	onEditSubmit() {
    this.setState({ isEdit: false });
  }

  componentDidMount() {
    fetch('/api/')
		.then(res => res.json())
    .then(res => {
          this.setState({ role: res.role, id: res.id })
          fetch(`/api/${res.id}`)
            .then(res => res.json())
            .then(res => this.setState({ lists: res, message: res.message }))
          fetch(`/api/${res.id}`, {
            method: 'PATCH',
            body: JSON.stringify(),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res => {
            return res;
          }).catch(err => err);
          }
    );
  }
  
  render() {
    const {name, password, email, secondEmail } = this.state.lists;
    const { isEdit } = this.state;
    return (
      <div className="container col-5">
        <form action={`/api/${this.state.id}?_method=PATCH`} method='POST' onSubmit={this.onEditSubmit}>
          <div className="form-group">
            <span>Ім'я:</span>
            <input placeholder="Name" name="name" className="form-control" disabled={isEdit}  ref={name => this.name = name} defaultValue={name} required />
            <span>Email:</span>
            <input type="email" name="email" placeholder="Email" className="form-control" disabled ref={email => this.email = email} defaultValue={email} required />
            <span>Другий email:</span>
            <input type="email" name="secondEmail" placeholder="Email" className="form-control" disabled={isEdit} ref={secondEmail => this.secondEmail = secondEmail} defaultValue={secondEmail} required />
            <span>Пароль:</span>
            <input type="password" name="password" placeholder="Password" className="form-control" disabled={isEdit} ref={password => this.password = password} defaultValue={password} required />
            <span>Підтвердити пароль:</span>
            <input type="password" name="confirmPassword" placeholder="Confirm Password:" className="form-control" disabled={isEdit} ref={confirmPassword => this.confirmPassword = confirmPassword} defaultValue={password} required />
            <br></br>
            <div className="row">
              <div className="col">
                <input type="submit" className="btn btn-success mt-1" value="Зберегти" disabled={isEdit}/>
              </div>
              <div className="col">
                <input type="button" className="btn btn-primary mt-1" onClick={this.onEdit} value="Редагувати" />
              </div>
              <div className="col">
                <a className="btn btn-danger mt-1" href="/setting">Відмінити</a>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    );
  }
}