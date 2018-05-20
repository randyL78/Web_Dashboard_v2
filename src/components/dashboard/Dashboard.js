import React from 'react';
import Cards from '../cards/Cards';

const Dashboard = () => {
  return (
      <div className="dashboard">
        <Cards size="full" />
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

export default Dashboard;