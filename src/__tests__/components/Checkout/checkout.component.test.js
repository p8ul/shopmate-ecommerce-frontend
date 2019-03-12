import React from 'react';
import { mount } from 'enzyme';
import { Checkout } from '../../../containers/Checkout';
import { store } from '../../../redux/store';

describe('<Checkout />', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = { store };
    wrapper = mount(<Checkout store={store} {...props} />);
  });

  it('should render checkout component without crashing', () => {
    expect(wrapper.find('CheckoutForm').length).toEqual(1);
    wrapper.instance().navigateStep();
    wrapper.instance().navigateStep(true);
    wrapper.instance().onChange({ target: { name: 'anem', value: 'value' } });
    wrapper.find('.bg-red-pink.rounded');
  });
});
