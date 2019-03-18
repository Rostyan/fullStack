import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import NewCandidate from './components/newCandidate';
import Setting from './components/setting';
import Admin from './components/adminsPanel/admin';
import Employees from './components/employees';
import NonFunctional from './components/nonFunctional';


import './assets/css/app.css';
import SendResetPassword from './components/SendResetPassword';
import ResetPassword from './components/resetPassword';

class App extends Component {
  

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <div className="container"></div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route path='/signup/:token' component={Register} />
              <Route exact path='/newCandidate' component={NewCandidate} />
              <Route exact path='/admin' component={Admin}/>
              <Route exact path='/employees' component={Employees}/>              
              <Route exact path='/nonFunctional' component={NonFunctional}/>              
              <Route exact path='/setting' component={Setting}/>
              <Route path='/reset/:token' component={ResetPassword}/>
              <Route exact path='/password_reset' component={SendResetPassword}/>
              <Route exact path='/api/password_reset' component={SendResetPassword}/>              
              
              <Route render={() => (<div className="error404">
                                      <h1>Error 404</h1>
                                      <h2>Page not found!</h2>
                                    </div>)} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
