import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: this.props.numberOfEvents
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateEvent('', value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label htmlFor='numberOfEvent'>Number of Events</label>
        <input
          type="number"
          className="eventNumber"
          placeholder='Enter Number of Events to display'
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;