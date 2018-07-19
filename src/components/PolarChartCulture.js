import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import * as culturePolarData from '../dataAnalysis/generateCulturePolarData';

class PolarChartCulture extends Component {
  state = {
    selectedChoice: 'card'
  };

  render() {
    const { playersData } = this.props;
    const players = Object.keys(playersData);
    // const choices =
    const { selectedChoice } = this.state;

    const totals = culturePolarData.generateTotals(
      playersData,
      players,
      selectedChoice
    );

    return (
      <div className="jumbotron bg-light">
        <h1>Cultural Decisions</h1>
        <Polar data={totals} />
        <div className="mb-5">
          {choices ? (
            <Select
              className="student-select mx-auto"
              name="culture-filter"
              value={this.state.selectedChoice}
              onChange={this.handleChange}
              options={choices.map(choice => {
                return { value: choice, label: choice };
              })}
            />
          ) : null}
        </div>
      </div>
    );
  }

  handleChange = selectedChoice => {
    if (selectedChoice === null) {
      this.setState({ selectedChoice: 'card' });
    } else {
      this.setState({ selectedChoice: selectedChoice.label });
    }
  };
}

export default PolarChartCulture;
