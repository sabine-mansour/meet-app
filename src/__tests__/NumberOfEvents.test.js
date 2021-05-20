import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.eventNumber')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const number = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.eventNumber').prop('value')).toBe(number);
  });

  test('change state when input changes', () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 5
    });
    const eventObject = { target: { value: 2 } };
    NumberOfEventsWrapper.find('.eventNumber').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
  });

})