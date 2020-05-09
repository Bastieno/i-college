import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Index from '../index';

describe('Index page', () => {
  it('should have the App component', () => {
    const wrapper = mount(<Index />);

    expect(wrapper.find('App')).toHaveLength(1);
  });

  it('should render without crashing', () => {
    const wrapper = shallow(<Index />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
