import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


// Custom components
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import SearchTab from './components/searchTab/SearchTab';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app" >
          <Header />
          <Navigation />
          <Route exact path="/" render={ () => <Redirect to = "/dashboard" /> } />
          <Route path="/:tab" render = { props => <SearchTab tab={props.match.params.tab}/> } />
          <Switch>
            <Route path="/dashboard" render={ () => <Dashboard tab="Dashboard" /> } />
         </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
