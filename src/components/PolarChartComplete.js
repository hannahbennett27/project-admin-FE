import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

class PolarChartComplete extends Component {
  render() {
    // const { playersData } = this.props;

    let polarData = {
      datasets: [
        {
          data: [20, 30, 10],
          backgroundColor: ['red', 'yellow', 'blue']
        }
      ],
      labels: ['Red', 'Yellow', 'Blue']
    };

    return <Polar data={polarData} />;
  }
}

export default PolarChartComplete;
