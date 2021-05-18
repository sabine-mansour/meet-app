import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {


  test('render Event Title', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  })

  test('render basic event information', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.basic-info')).toHaveLength(1);
  })

  test('have a show details button', () => {
    const EventWrapper = shallow(<Event />);
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  })

  test('event details expand on click', () => {
    const EventWrapper = shallow(<Event />);
    EventWrapper.setState({ expanded: false })
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('expanded')).toBe(true);
  })

})