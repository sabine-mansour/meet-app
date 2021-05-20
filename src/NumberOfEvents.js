import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    NumberOfEvents: this.props.NumberOfEvents
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvent(null, value);
    this.setState({
      NumberOfEvents: value
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <input
          type="number"
          className="eventNumber"
          value={this.state.NumberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;