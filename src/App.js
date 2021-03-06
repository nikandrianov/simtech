import React from 'react';
import './App.scss';
import Login from './component/Login';
import Admin from './component/Admin';
import PrivateRoute from './containers/PrivateRoute';
import { HashRouter, Route, Switch } from 'react-router-dom';
import User from './component/User';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/admin" component={Admin}/>
          <PrivateRoute path="/user" component={User}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
