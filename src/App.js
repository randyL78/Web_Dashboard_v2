import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


// Custom components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Cards from './components/cards/Cards';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app" >
          <Header />
          <Navigation />
          <Route exact path="/" render={ () => <Redirect to = "/dashboard" /> } />
          <Switch>
            <Route exact path="/dashboard" render={ () => <Dashboard /> } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
