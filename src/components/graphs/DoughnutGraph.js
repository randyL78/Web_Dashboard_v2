import React from 'react';
import Chart from 'chart.js';


class DoughnutGraph extends React.Component {
  componentDidMount() {
    this.createGraph();
  }
  
  createGraph = () => {
    
    const mobileChart = new Chart(this.mobileChart,  {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [1600, 400, 400],
          backgroundColor: [ '#7477BF' , '#78CF82', '#51B6C8'],
          borderWidth: [0, 0, 0]
        }],
        labels: ['Desktop', 'Tablet', 'Phone']
      },
      options: {
        rotation: 0 * Math.PI,
        legend: {
          position: 'right',
          reverse: true,
          labels: {
            boxWidth: 20,
            fontSize: 14,
            fontColor: '#888',
            padding: 15
          }
        }
      }
    })
  }

  render () {
    return (
      <div className= "card card--half" >
        <div className="flex-wrapper" >
          <h4 className="headline--med title">MOBILE USERS</h4>
        </div>
        <div className="graph__container">
          <canvas ref= { canvas => this.mobileChart = canvas } ></canvas>
        </div>
      </div> 
    );
  }
}

export default DoughnutGraph;