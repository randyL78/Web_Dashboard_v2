import React from 'react';
import Chart from 'chart.js';


class BarGraph extends React.Component {
  componentDidMount() {
    this.createGraph();
  }
  
  createGraph = () => {
    
    const trafficChart = new Chart(this.trafficChart,  {
      type: 'bar',
      data: {
        datasets: [{
          data: [75, 100, 175, 125, 225, 200, 100],
          backgroundColor:  '#7477BF',
          borderWidth: [0, 0, 0]
        }],
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      },
      options: {
        rotation: 0 * Math.PI,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              drawTicks: false,
              offsetGridLines: true
            }
          }]
        },
      }
    })
  }

  render () {
    return (
      <div className= "card card--half" >
        <div className="flex-wrapper" >
          <h4 className="headline--med title">DAILY TRAFFIC</h4>
        </div>
        <div className="graph__container">
          <canvas ref= { canvas => this.trafficChart = canvas } ></canvas>
        </div>
      </div> 
    );
  }
}

export default BarGraph;