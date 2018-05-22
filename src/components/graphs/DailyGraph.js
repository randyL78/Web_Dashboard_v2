import React from 'react';
import Chart from 'chart.js';


class DailyGraph extends React.Component {


  componentDidMount() {
    this.createGraph();
  }
  

  createGraph = () => {
    
    const dailyChart = new Chart(this.dailyChart,  {
      type: 'line',
      data: {
          labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
          datasets: [{
              lineTension: .15,
              label: 'Total Users',
              data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 2000, 2250],
              backgroundColor: [
                  'rgba(116, 119, 191, 0.2)'
              ],
              borderColor: [
                'rgba(116, 119, 191, 0.6)',
              ],
              borderWidth: 1.5,
              pointBackgroundColor: '#fcfcff',
              pointRadius: 5
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  },
                  gridLines: {
                    offsetGridLines: true
                  }

              }]
          }
      }
    })
  }

  render (props) {
    return (
      <div className="graph__container">
        <canvas ref= { canvas => this.dailyChart = canvas } ></canvas>
      </div>
    );
  }
}

export default DailyGraph;