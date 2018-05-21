import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PageTitle from './components/PageTitle'
import Carte from './components/Carte'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <PageTitle active_item = "Acceuil" className = 'pageTitle'/>
        <div className = 'corps-page'> 
          <Carte titre = 'Carte demo' description = 'Neat description' />
        </div>
      </div>
    );
  }
}

export default App;
