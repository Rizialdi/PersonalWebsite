import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import Posts from './components/Posts';
import Contacts from './components/Contacts';
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div> 
          <Route exact path = '/' component = {Home} />
          <Route path = '/curriculum' component = {Curriculum} />
          <Route path = '/posts' component = {Posts} />
          <Route path = '/contacts' component = {Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
