import React, { Component } from 'react';

import {
  BrowserRouter as Router
} from 'react-router-dom';


class EditUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: ' ',
      email: ' '
    };
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }


  onDelete() {
    return fetch('/api/admin/delete', {
      method: 'delete',
      body: JSON.stringify({ email: this.props.email }),
      headers: { 'Content-type': 'application/json' }
    }).then(window.location.reload())
  }

  onEdit() {
    if (this.state.isEdit) {
      this.setState({ isEdit: false });
    } else {
      this.setState({ isEdit: true });
    }

  }
  onEditSubmit() {
    this.props.onEditSubmit(this.email.value, this.role.value, this.secondEmail.value, this.name.value, this.password.value);

    this.setState({ isEdit: false });
    fetch('/api/admin/patch', {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
    })
  }

  render() {
    const { email, role, secondEmail, name, password } = this.props;
    return (
      <Router>
        {
          this.state.isEdit
            ? (
              <tr>
                <td>
                  <form action='/api/admin/patch?_method=PATCH' method='POST' onSubmit={this.onEditSubmit}>
                    <div className="form-group">
                      <span>Ім'я</span>
                      <input placeholder="Name" name="name" className="form-control" ref={name => this.name = name} defaultValue={name} required />
                      <span>Емейл</span>
                      <input type="email" placeholder="Email" className="form-control" disabled ref={email => this.email = email} value={email} required />
                      <input type="hidden" name="email" placeholder="Email" className="form-control" ref={email => this.email = email} value={email} required />
                      <span>Запасний емейл</span>
                      <input type="email" name="secondEmail" placeholder="Second Email" className="form-control" ref={secondEmail => this.secondEmail = secondEmail} defaultValue={secondEmail} required />
                      <span>Роль</span>
                      <select className="form-control" name="role" ref={role => this.role = role} defaultValue={role}>
                        <option value="recruiter" defaultValue>Рекрутер</option>
                        <option value="admin" >Адміністратор</option>
                      </select>
                      <br></br>
                      <input type="submit"
                        className="btn btn-block btn-primary " value="Зберегти" />
                    </div>
                  </form>
                  <button className="btn btn-block btn-danger" onClick={this.onEdit}>Скасувати</button>
                </td>
              </tr>
            )
            : (
              <tr>
                <td>{email}</td>
                <td>{role}</td>
                <td><button type="button" className="btn btn-primary" onClick={this.onEdit}>Редагувати</button></td>
                <td><button type="button" className="btn btn-danger" onClick={this.onDelete.bind(this)}>Видалити</button></td>
              </tr>
            )
        }
      </Router>
    );
  }
}

export default EditUser;
