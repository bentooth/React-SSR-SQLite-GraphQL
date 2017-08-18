import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
//import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    );
  }
}

export default App;