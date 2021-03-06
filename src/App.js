import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import PastMoods from './Components/PastMoods';
import Detail from './Components/Detail';

class App extends Component {
  constructor() {
    super();

  }

  // <div style={{backgroundColor: "#F6BB42"}}>
  render() {
    
    return (
      <div>
      <Router>
        <Switch>
          <Route exact path='/pastmoods' component = {PastMoods}/>
          <Route exact path="/" component = {Home}/>
          <Route exact path='/detail/:id' component = {Detail}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
