import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import Saved from './Components/Saved';
import Detail from './Components/Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/saved' component = {Saved}/>
          <Route exact path="/" component = {Home}/>
          <Route exact path='/detail' component = {Detail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
