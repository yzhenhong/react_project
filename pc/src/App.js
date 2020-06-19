import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from './components/layout/index'
import Login from './views/account/login'
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
						return <Redirect to="/home/index"/>
					}}/>
          <Route path='/home' component={Layout}/>
          <Route path='/example' component={Layout}/>
          <Route path='/account/login' component={Login}/>
          <Route path='*' render={()=>{
						return <Redirect to="/home/index"/>
					}}/>
        </Switch>
      </Router>
    )
  };
  
  componentDidMount() {
  };

}


export default App;
