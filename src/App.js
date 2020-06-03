import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Secret from './secret';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route path="/secret" component={Secret}></Route>
      </Switch>
    </div>
  );
}

export default App;
