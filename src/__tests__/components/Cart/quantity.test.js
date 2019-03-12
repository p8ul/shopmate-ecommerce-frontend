import React from 'react';
import { mount } from 'enzyme';
import Quantity from '../../../components/Cart/Quantity';

describe('<Quantity />', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      fetchCartProducts: jest.fn(),
      quantity: 3,
    };
    wrapper = mount(<Quantity {...props} />);
  });
  it('should render Quantity without crashing', () => {
    wrapper.instance().handleChange({ target: { value: 2 } });
    wrapper.instance().increment(true);
    expect(wrapper.state().quantity).toEqual(3);

    wrapper
      .find('Label')
      .at(0)
      .simulate('click');
    wrapper
      .find('Label')
      .at(1)
      .simulate('click');
    wrapper.instance().updateQuantity(2);
  });

  it('should decrement quantity', () => {
    wrapper.instance().increment(false);
    expect(wrapper.state().quantity).toEqual(2);
    wrapper.instance().increment(false);
    wrapper.instance().increment(false);
    expect(wrapper.state().quantity).toEqual(1);
  });
});
