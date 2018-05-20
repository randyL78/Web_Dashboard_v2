import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import Navigation from './navigation/Navigation';

class LineGraph extends React.Component {
  render () {
    
    return  (
      <div className= "card card--full" >
        <div className="flex-wrapper" >
          <h4 className="headline--med title">TRAFFIC</h4>
          <Navigation />
        </div>
        <Route exact path="/dashboard"    render= { () => <Redirect to="/dashboard/daily" /> } />
        <Route path="/dashboard/hourly"   render= { () => <h3 className="headline">Hourly</h3>} />
        <Route path="/dashboard/daily"    render= { () => <h3 className="headline">Daily</h3>} />
        <Route path="/dashboard/weekly"   render= { () => <h3 className="headline">Weekly</h3>} />
        <Route path="/dashboard/monthly"  render= { () => <h3 className="headline">Monthly</h3>} />
      </div> 
    ); 

  }

}

export default LineGraph;