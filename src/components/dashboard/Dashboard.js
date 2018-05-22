import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

import Cards from '../cards/Cards';
import LineGraphs from '../graphs/LineGraphs';
import SocialCard from './socialWidget/SocialCard';
import DoughnutGraph from '../graphs/DoughnutGraph';
import BarGraph from '../graphs/BarGraph';

class Dashboard extends React.Component {

  constructor (props) {
    super(props);
    Chart.defaults.global.animation.duration = 0;
    Chart.defaults.global.responsiveAnimationDuration = 0;
    Chart.defaults.global.tooltips = { 
      ...Chart.defaults.global.tooltips,
      backgroundColor : 'rgba(77, 80, 137, 0.8)',
      displayColors : false
    }
  }

  render (props) {
    return (
        <div className="dashboard">
          <LineGraphs />
          <BarGraph />
          <DoughnutGraph />
          <SocialCard />
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