import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import routes from './routes';
//import './App.css';

import Albums from './album'
import Home from './home'
import Login from './login'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/albums" component={Albums}/>
        <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;