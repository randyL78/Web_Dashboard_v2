import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import Navigation from './navigation/Navigation';
import DailyGraph from './DailyGraph';

class LineGraphs extends React.Component {
  constructor () {
    super();

  }


  render () {
    return  (
      <div className= "card card--full" >
        <div className="flex-wrapper" >
          <h4 className="headline--med title">TRAFFIC</h4>
          <Navigation />
        </div>
        <Route exact path="/dashboard"    render= { () => <Redirect to="/dashboard/daily" /> } />
        <Route path="/dashboard/hourly"   render= { () => < DailyGraph /> } /> 
        <Route path="/dashboard/daily"    render= { () => < DailyGraph /> } />
        <Route path="/dashboard/weekly"   render= { () => < DailyGraph /> } /> 
        <Route path="/dashboard/monthly"  render= { () => < DailyGraph /> } />
      </div> 
    ); 

  }

}

export default LineGraphs;