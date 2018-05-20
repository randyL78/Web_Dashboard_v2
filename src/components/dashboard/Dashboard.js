import React from 'react';
import PropTypes from 'prop-types';

import Cards from '../cards/Cards';
import LineGraph from '../graphs/LineGraph';

class Dashboard extends React.Component {
  render (props) {
    return (
        <div className="dashboard">
          <LineGraph />
          <Cards size="half" />
          <Cards size="half" />
          <Cards size="full" />
          <Cards size="half" />
          <Cards size="half" />
          <Cards size="half" />
          <Cards size="half" />
        </div> 
    );
  }
}

Dashboard.propTypes = {
  tab : PropTypes.string
}

export default Dashboard;