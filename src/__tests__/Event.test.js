import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {


  test('render Event Title', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render basic event information', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.event-details')).toHaveLength(1);
  })

  test('have a show details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.details-btn')).toHaveLength(1);
  })

  test('event details expand on click', () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.setState({ showHideDetails: false })
    EventWrapper.find('.show-hide-btn').simulate('click');
    expect(EventWrapper.state('showHideDetails')).toBe(true);
  })

})