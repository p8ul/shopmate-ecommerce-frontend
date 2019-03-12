import React from 'react';
import { mount } from 'enzyme';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import Attributes from '../../../components/Cart/Attributes';

describe('<ProductList />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      setAttribute: jest.fn(),
      attributes: [{ attribute_name: 'Size', attribute_value: 'X' }],
      name: 'Size',
    };
    wrapper = mount(<Attributes {...props} />, new ReactRouterEnzymeContext());
  });
  it('should render ProductList without crashing', () => {
    expect(wrapper.find('Attributes').length).toEqual(1);
    const node = wrapper.find('.x').at(0);
    node.simulate('click');
  });
});
