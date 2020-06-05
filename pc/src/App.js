import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './views/home/index'
import Login from './views/login/index'
import Layout from './components/layout/index'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={()=>{
						return <Redirect to="/home"/>
					}}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/layout' component={Layout}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    )
  };


}

export default App;
